import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaSearch } from 'react-icons/fa'
import * as S from './styles'
import { FilterCategories } from './styles'
import FilterCard from '../../components/FilterCard'
import { RootState } from '../../store'
import * as enums from '../../enums/Contacts/enumsContacts'
import { changeFilter } from '../../store/slices/filters'

type Props = {
  showFilters: boolean
}

const SideBar = ({ showFilters }: Props) => {
  const dispatch = useDispatch()
  const { criterion, term } = useSelector((state: RootState) => state.filter)
  const contacts = useSelector((state: RootState) => state.contacts.items) // Obtendo os contatos do estado Redux

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
      (contact) => contact.category === enums.Category.FAMILY
    ).length,
    friend: contacts.filter(
      (contact) => contact.category === enums.Category.FRIEND
    ).length,
    business: contacts.filter(
      (contact) => contact.category === enums.Category.BUSINESS
    ).length,
    others: contacts.filter(
      (contact) => contact.category === enums.Category.OTHERS
    ).length,
  }

  const categories = [
    { key: enums.Category.ALL, name: 'All', count: categoriesCount.all },
    {
      key: enums.Category.FAMILY,
      name: 'Family',
      count: categoriesCount.family,
    },
    {
      key: enums.Category.FRIEND,
      name: 'Friends',
      count: categoriesCount.friend,
    },
    {
      key: enums.Category.BUSINESS,
      name: 'Work',
      count: categoriesCount.business,
    },
    {
      key: enums.Category.OTHERS,
      name: 'Others',
      count: categoriesCount.others,
    },
  ]

  return (
    <S.SideBar show={showFilters}>
      <S.Title><S.SearchIcon as={FaSearch} />Search Contacts</S.Title>
      <S.Actions>
        <S.FilterSection>
          <S.SearchContainer>
            <S.SearchIcon2 as={FaSearch} />
            <S.SearchInput
              type="text"
              placeholder="Search contact by name"
              value={term}
              onChange={handleSearchChange}
            />
          </S.SearchContainer>
        </S.FilterSection>

        <FilterCategories>
          <label htmlFor="criterion">category: </label>
          <select
            id="criterion"
            value={criterion}
            onChange={handleChangeFilter}
          >
            <option className="all" value={enums.Category.ALL}>All</option>
            <option className="family" value={enums.Category.FAMILY}>Family</option>
            <option className="friend" value={enums.Category.FRIEND}>Friends</option>
            <option className="work" value={enums.Category.BUSINESS}>Work</option>
            <option className="others" value={enums.Category.OTHERS}>Others</option>
          </select>
        </FilterCategories>
      </S.Actions>

      <S.Filters>
        <h2>Filters: <h2>Total</h2></h2>
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
