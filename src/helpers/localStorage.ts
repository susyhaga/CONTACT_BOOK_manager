import { ContactModel } from '../components/Contact'

export const saveContactsToLocalStorage = (contacts: ContactModel[]) => {
  localStorage.setItem('contacts', JSON.stringify(contacts))
}

export const getContactsFromLocalStorage = (): ContactModel[] => {
  const contacts = localStorage.getItem('contacts')
  return contacts ? JSON.parse(contacts) : []
}
