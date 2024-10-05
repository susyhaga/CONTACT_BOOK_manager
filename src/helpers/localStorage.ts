// Funções para gerenciar contatos no localStorage
import { ContactModel } from '../components/Contact';

// Salva contatos no localStorage
export const saveContactsToLocalStorage = (contacts: ContactModel[]) => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};

// Obtém contatos do localStorage
export const getContactsFromLocalStorage = (): ContactModel[] => {
  const contacts = localStorage.getItem('contacts');
  return contacts ? JSON.parse(contacts) : [];
};
