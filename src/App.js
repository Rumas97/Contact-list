import './App.css';
import data from './contacts.json'
import React,{useState} from 'react';
import {Paper, Grid} from '@material-ui/core'
import ContactDetails from './components/ContactDetails';


function App() {
  const [contacts, updateContacts] = useState(data)

  const handleAddContact=(contact)=>{
    updateContacts([contact,...contacts])
  }

  return (
    <ContactDetails onAdd={handleAddContact} contacts={contacts} />

  );
}



export default App;
