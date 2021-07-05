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
    })

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
            <input onChange={handleAddressChange} type="text" value={contactDetail.name} />
            <button onClick={() => { onEdit(contactDetail)  }}>Submit</button>
        </div>
    )
}

export default EditForm
