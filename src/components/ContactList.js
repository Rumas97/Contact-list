import React from 'react'
import { Link } from 'react-router-dom'

function ContactList(props) {

    const{contacts}=props


    
    return (
        <div>
            <h1>Contact List</h1>
            {
                contacts.map((singleContact)=>{
                   
                    return <div key={singleContact._id}>
                        <Link to ={`/contacts/${singleContact._id}`}>{singleContact.firstName + "  " + singleContact.lastName}</Link>
                        {
                            singleContact.address.map((singleAddress)=>{
                                return <div>{singleAddress}</div>
                            })
                        }
                      
                    </div>
                    
                })
            }
            
        </div>
    )
}

export default ContactList
