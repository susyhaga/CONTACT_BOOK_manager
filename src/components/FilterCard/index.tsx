import React from 'react'
import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import * as enums from '../../enums/Contacts/enumsContacts'

export type Props = {
  name: string
  isActive: boolean
  category: enums.Category
  count: number
  onClick: () => void
}

const FilterCard = ({ name, isActive, category, count, onClick }: Props) => {
  // useSelector para acessar o estado global
  const { filter, contacts } = useSelector((state: RootState) => state)

  const countContacts = React.useMemo(() => {
    return contacts.items.filter((item) => {
      const matchesCategory = category === enums.Category.ALL || item.category === category; // Atualizado para contar todos os contatos se a categoria for "ALL"
      const matchesTerm = item.name.toLowerCase().includes(filter.term.toLowerCase() || ''); // Alteração: utilizar includes para busca
      return matchesCategory && matchesTerm;
    }).length
  }, [contacts.items, filter.term, category])

  return (
    <S.Card active={isActive} onClick={onClick}>
      <S.Label>{name}</S.Label>
      <S.Counter>{count || countContacts}</S.Counter>
    </S.Card>
  )
}

export default FilterCard
