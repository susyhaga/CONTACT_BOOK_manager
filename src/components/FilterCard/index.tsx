import React from 'react'
import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import * as enums from '../../enums/Contacts/enumsContacts'

export type Props = {
  name: string
  isActive: boolean
  category: enums.Category
  count: number
  onClick: () => void
}

const FilterCard: React.FC<Props> = ({
  name,
  isActive,
  category,
  count,
  onClick
}) => {
  // useSelector para acessar o estado global
  const { filter, contacts } = useSelector((state: RootReducer) => state)

  const countContacts = (category: enums.Category) => {
    console.log('Contando contatos para a categoria:', category)
    return contacts.items.filter((item) => {
      const matchesCategory = category ? item.category === category : true
      const matchesTerm = item.name
        .toLowerCase()
        .includes(filter.term?.toLowerCase() || '')
      return matchesCategory && matchesTerm
    }).length
  }

  return (
    <S.Card active={isActive} onClick={onClick}>
      <S.Counter>{count || countContacts(category)}</S.Counter>
      <S.Label>{name}</S.Label>
    </S.Card>
  )
}

export default FilterCard
