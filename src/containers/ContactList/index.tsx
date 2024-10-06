import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from '../../components/Contact';
import * as enums from '../../enums/Contacts/enumsContacts'
import { MainContainer } from '../../styles';
import { RootState } from '../../store';
import { ContactModel } from '../../components/Contact';
import { saveContactsToLocalStorage, getContactsFromLocalStorage, generateContacts } from '../../helpers/localStorage';
import { Alphabet, ContainerList, ContactBook } from './styles';
import addContactIcon from '../../icons/contact.png';
import { edit, remove, register as addContact } from '../../store/slices/contact';

const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.contacts.items);
  const { term, criterion } = useSelector((state: RootState) => state.filter);

  // Carregar contatos do localStorage
  useEffect(() => {
    const storedContacts = getContactsFromLocalStorage();
    if (storedContacts.length > 0) {
      storedContacts.forEach(contact => {
        const contactWithCorrectCategory: ContactModel = {
          ...contact,
          category: contact.category as enums.Category,  // Assegure que a categoria é do tipo esperado
        };
        dispatch(addContact(contactWithCorrectCategory));
      });
    } else {
      // Se não há contatos, gere novos contatos
      const newContacts = generateContacts(400); // Gere 400 contatos
      newContacts.forEach(contact => dispatch(addContact(contact))); // Adiciona contatos gerados ao Redux
      saveContactsToLocalStorage(newContacts); // Salva novos contatos no localStorage
    }
  }, [dispatch]);

  const filterContacts = () => {
    return items.filter((item: ContactModel) => {
      const termoMatch = term
        ? item.name.toLowerCase().startsWith(term.toLowerCase())
        : true;

      const criterioMatch = criterion === 'all' || item.category === criterion;

      return termoMatch && criterioMatch;
    });
  };

  const filtered = filterContacts();

  // Salvar contatos no localStorage sempre que mudar
  useEffect(() => {
    saveContactsToLocalStorage(items);
  }, [items]);

  const handleEdit = (updatedContact: ContactModel) => {
    dispatch(edit(updatedContact));
  };

  const handleDelete = (id: string) => {
    dispatch(remove(id));
  };

  if (!filtered.length) return <div>No contacts found.</div>;

  return (
    <ContainerList>
      <MainContainer>
        <ContactBook>
          <img src={addContactIcon} alt="Add Contact" />
          <h1>Phone Book</h1>
        </ContactBook>
        <ul>
          {filtered.map((t: ContactModel) => (
            <li key={t.id}>
              <Contact
                id={t.id}
                name={t.name}
                email={t.email}
                phone={t.phone}
                ddd={t.ddd}
                category={t.category}
                onEdit={handleEdit}
                onDelete={() => handleDelete(t.id)}
              />
            </li>
          ))}
        </ul>
      </MainContainer>
      <Alphabet>
        <ul>
          {Array.from(Array(26)).map((_, index) => (
            <li key={index}>{String.fromCharCode(65 + index)}</li>
          ))}
        </ul>
      </Alphabet>
    </ContainerList>
  );
};

export default ContactList;
