import axios from 'axios';
import './App.css';
import React,{useEffect,useState} from 'react';
import ContactDetail from './components/ContactDetail';
import { Switch, Route, withRouter } from 'react-router-dom';
import ContactList from './components/ContactList';
import EditForm from './components/EditForm';
import AddContact from './components/AddContact';
import MyNav from './components/MyNav';


function App(props) {
  const [contacts, updateContacts] = useState([])


  useEffect(() => {

    axios.get('http://localhost:5005/api/contacts')
     .then((response) => {
      updateContacts(response.data)
     })
 }, [])



  const handleAddContact=(event)=>{
    event.preventDefault()

    let newContact={
      firstName:event.target.firstName.value,
      lastName:event.target.lastName.value,
      address:event.target.address.value,
    }

    axios.post('http://localhost:5005/api/create', newContact)
    .then((response)=>{
      updateContacts([response.data,...contacts])
      props.history.push('/')
      
    })
    .catch((err)=>{
      console.log("adding new contact failed")
    })

    

  }

 

  const handleEdit=(contactDetail)=>{
    
    axios.patch(`http://localhost:5005/api/contacts/${contactDetail._id}/edit`, contactDetail)
    .then(()=>{
      let updatedContacts = contacts.map((singleContact)=>{
        if(singleContact._id == contactDetail._id){
          singleContact.firstName= contactDetail.firstName
          singleContact.lastName= contactDetail.lastName
          singleContact.address= contactDetail.address
        }
        return singleContact
      })
      updateContacts(updatedContacts)
      props.history.push(`/contacts/${contactDetail._id}`)
    })
    .catch(()=>{
      console.log('edit crashed')
    })
  }


  return (
    <div>
      <MyNav /> 
      <div>
 
      <Switch>
        <Route exact path="/" render={() => {
          return <ContactList contacts={contacts}/>
        }}/>
        <Route exact path="/contacts/:id" render={(routeProps)=>{
          return <ContactDetail{...routeProps} />
        }}/>
        <Route exact path="/contacts/:id/edit" render={(routeProps)=>{
          return <EditForm onEdit={handleEdit}{...routeProps} />
        }}/>
        <Route exact path="/create" render={()=>{
          return <AddContact onAdd={handleAddContact} />
        }}/>
      </Switch>
      
    </div>
    </div>

    

  );
}



export default withRouter(App);
