import React, { useState } from 'react'
import {Paper, Grid} from '@material-ui/core'
import AddContact from './AddContact';
import { Button } from '@material-ui/core';

function ContactDetails(props) {
    const [showForm, updateForm]=useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()

        const {firstName,lastName,address}=e.target
        console.log("e.target.value", e.target.value)

        if(firstName){
            let newAddress={
                address:address.push("address")
            }

            updateForm(false)
            props.onAdd(newAddress)
        }
        else{
            let newContact={
                firstName:firstName.value,
                lastName:lastName.value,
                address:address.value
            }

            updateForm(false)
            props.onAdd(newContact)
        }

        

        
    }

    const handleShowForm=()=>{
        updateForm(true)
    }

    const {contacts}=props
    return (
        <div>
             
            <h1>  
                Contact List  
            </h1>  
            
        <div>
        {
            showForm ? 
                <AddContact onSubmit={handleSubmit} /> : 
                <Button onClick={handleShowForm} variant="contained" color="primary">Add a new contact</Button> 
        }

        {
          contacts.map((singleContact,index)=>{
            return (
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <Paper >
                            <div key={index}>
                                <p><img style={{ "height": "20px" }} src="assets/user.png" /> {singleContact.firstName + "  " + singleContact.lastName}</p>
                                <p><img style={{ "height": "20px" }} src="assets/address.png" /> {singleContact.address  }</p>
                                <br></br>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            )
          
          })
        }

      </div>

      
      
    </div>
    )
}

export default ContactDetails
