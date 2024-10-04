import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaSearch } from 'react-icons/fa';

import * as S from './styles'
import FilterCard from '../../components/FilterCard'
import { RootState } from '../../store'
import * as enums from '../../enums/Contacts/enumsContacts'
import { changeFilter } from '../../store/slices/filters'
import { useGetContactsQuery } from '../../services/api'

// Definindo o tipo para o contato
type Contact = {
  id: number // ou string, dependendo do seu caso
  name: string
  category: enums.Category
}

type Props = {
  showFilters: boolean
}

const SideBar = ({ showFilters }: Props) => {
  const dispatch = useDispatch()
  const { criterion, term } = useSelector((state: RootState) => state.filter)
  const { data: contacts = [] } = useGetContactsQuery() as unknown as {
    data: Contact[]
  } // Tipando a resposta da query

  const handleChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      changeFilter({ criterion: e.target.value as enums.Category, term })
    )
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value
    dispatch(changeFilter({ criterion, term: searchTerm }))
  }

  const handleFilterCardClick = (category: enums.Category) => {
    dispatch(changeFilter({ criterion: category, term }))
  }

  // Contagem de categorias
  const categoriesCount = {
    all: contacts.length,
    family: contacts.filter(
      (contact: Contact) => contact.category === enums.Category.FAMILY
    ).length,
    friend: contacts.filter(
      (contact: Contact) => contact.category === enums.Category.FRIEND
    ).length,
    business: contacts.filter(
      (contact: Contact) => contact.category === enums.Category.BUSINESS
    ).length,
    others: contacts.filter(
      (contact: Contact) => contact.category === enums.Category.OTHERS
    ).length
  }

  const categories = [
    { key: enums.Category.ALL, name: 'All', count: categoriesCount.all },
    {
      key: enums.Category.FAMILY,
      name: 'Family',
      count: categoriesCount.family
    },
    {
      key: enums.Category.FRIEND,
      name: 'Friend',
      count: categoriesCount.friend
    },
    {
      key: enums.Category.BUSINESS,
      name: 'Business',
      count: categoriesCount.business
    },
    {
      key: enums.Category.OTHERS,
      name: 'Others',
      count: categoriesCount.others
    }
  ]

  return (
    <S.SideBar show={showFilters}>
      <S.Title>Search Contacts</S.Title>
      <S.Actions>
        <S.FilterSection>
          <S.SearchContainer>
            <S.SearchIcon as={FaSearch} />
            <S.SearchInput
              type="text"
              placeholder="contact name"
              value={term}
              onChange={handleSearchChange}
            />
          </S.SearchContainer>
        </S.FilterSection>

        <S.FilterSection>
          <label htmlFor="criterion">category: </label>
          <select
            id="criterion"
            value={criterion}
            onChange={handleChangeFilter}
          >
            <option value={enums.Category.FAMILY}>
              {enums.Category.FAMILY}
            </option>
            <option value={enums.Category.FRIEND}>
              {enums.Category.FRIEND}
            </option>
            <option value={enums.Category.BUSINESS}>
              {enums.Category.BUSINESS}
            </option>
            <option value={enums.Category.OTHERS}>
              {enums.Category.OTHERS}
            </option>
            <option value={enums.Category.ALL}>{enums.Category.ALL}</option>
          </select>
        </S.FilterSection>
      </S.Actions>

      <S.Filters>
        {categories.map(({ key, name, count }) => (
          <FilterCard
            key={key}
            name={name}
            count={count}
            isActive={criterion === key}
            category={key as enums.Category}
            onClick={() => handleFilterCardClick(key as enums.Category)}
          />
        ))}
      </S.Filters>
    </S.SideBar>
  )
}

export default SideBar
