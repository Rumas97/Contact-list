import React, { useState, useEffect } from 'react'
import axios from 'axios'

function EditForm(props) {

    const [contactDetail, updateContactDetail]=useState({})
    // console.log(props.match.params)

    useEffect(()=>{
        let contactId= props.match.params.id
        console.log(contactId)
        axios.get(`http://localhost:5005/api/contacts/${contactId}`)
        .then((response)=>{
            updateContactDetail(response.data)
        })
    },[])

    const handleFirstNameChange = (event) => {
    

        let newFirstName = event.target.value
        console.log("newfirstName",newFirstName)
        let cloneContactDetail = JSON.parse(JSON.stringify(contactDetail))

        cloneContactDetail.firstName = newFirstName
        updateContactDetail(cloneContactDetail)

    }

    const handleLastNameChange = (event) => {

        let newLastName = event.target.value
        let cloneContactDetail = JSON.parse(JSON.stringify(contactDetail))

        cloneContactDetail.lastName = newLastName
        updateContactDetail(cloneContactDetail)

    }

    const handleAddressChange=(event)=>{
        let newAddress = event.target.value

        let cloneContactDetail= JSON.parse(JSON.stringify(contactDetail))

        cloneContactDetail.address=newAddress

        updateContactDetail(cloneContactDetail)
    }

    

    const{onEdit}=props
    return (
        <div>
            <h3>Edit contact details</h3>
            <input onChange={handleFirstNameChange} type="text" value={contactDetail.firstName} />
            <input onChange={handleLastNameChange} type="text" value={contactDetail.lastName} />
            <input onChange={handleAddressChange} type="text" value={contactDetail.address} />
            <button onClick={() => { onEdit(contactDetail)  }}>Submit</button>
        </div>
    )
}

export default EditForm
