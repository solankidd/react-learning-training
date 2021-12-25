import React, {useState, useEffect} from 'react';
/* import { uuid } from 'uuid';
import { v4 as uuidv4 } from 'uuid'; */

import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import './App.css';

function App() {
  const LOCAL_STORAGE_KEY =  'contacts';
  const [contacts, setContacts] = useState([]);

  let time = new Date().getTime();
  const addContactHandler = (contact) => {
    setContacts([...contacts, {...contact, id: time}])
  }

  const deleteHandler = (id) => {
    const filteredContacts = contacts.filter( contact => contact.id !== id )
    setContacts(filteredContacts);
  }

  useEffect(()=>{
    const retrivedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrivedContacts){
      setContacts(retrivedContacts)
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>
      <Header></Header>
      <AddContact addContactHandler={addContactHandler}></AddContact>
      <ContactList contacts={contacts} deleteHandler={deleteHandler}></ContactList>
    </div>
  );
}

export default App;
