// Funções para gerenciar contatos no localStorage
import { ContactModel } from '../components/Contact';
import * as enums from '../enums/Contacts/enumsContacts'

const categories: enums.Category[] = [enums.Category.FAMILY, enums.Category.FRIEND, enums.Category.BUSINESS, enums.Category.OTHERS]; // Use the enum values

// Salva contatos no localStorage
export const saveContactsToLocalStorage = (contacts: ContactModel[]) => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};

// Obtém contatos do localStorage
export const getContactsFromLocalStorage = (): ContactModel[] => {
  const contacts = localStorage.getItem('contacts')
  return contacts ? JSON.parse(contacts) : []
}


// Gera contatos fictícios
export const generateContacts = (num: number): ContactModel[] => {
  const contacts: ContactModel[] = [];
  for (let i = 0; i < num; i++) {
    const contact: ContactModel = {
      id: `${i + 1}`,
      name: `Contact ${i + 1}`,
      email: `contact${i + 1}@example.com`,
      phone: `123456789${i}`,
      ddd: '11',
      category: categories[Math.floor(Math.random() * categories.length)], // Seleciona uma categoria aleatória
    };
    contacts.push(contact);
  }
  return contacts;
}
