import React, {useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


function ContactDetail(props) {

    const [contactDetail, updateContactDetail]=useState({})


    
    useEffect(()=>{
        let id=props.match.params.id
        axios.get(`http://localhost:5005/api/contacts/${id}`)
        .then((response)=>{
            updateContactDetail(response.data)
        })
        .catch((err)=>{
            console.log("fetching single contact data failed")
        })
    },[])


    return (
        
        <div>
            
            <h3>Contact Details</h3>
            <h4>{contactDetail.firstName}</h4>
            <h4>{contactDetail.lastName}</h4>
            <h4>{contactDetail.address}
                {
                contactDetail.address.map((singleAddress)=>{
                    return <div>{singleAddress}</div>
                })
                }
            </h4>
            <button>
                <Link to={`/contacts/${contactDetail._id}/edit`}>Edit</Link>
            </button>
        </div>
    )
        
   
    
}

export default ContactDetail
