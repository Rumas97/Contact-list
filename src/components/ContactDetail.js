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

    if(!contactDetail.address){
        return <h1>...loading</h1>
      }

    return (
        
        <div>
            
            <h3>Contact Details</h3>
            <div style={{fontSize:"20px"}}>First Name: {contactDetail.firstName}
            <button style={{fontSize:"16px"},{marginLeft:"30px"}}>
                <Link to={`/contacts/${contactDetail._id}/edit`}>Edit</Link>
            </button></div>
            
            <div style={{fontSize:"20px"}}>Last Name: {contactDetail.lastName}
            <button style={{fontSize:"16px"},{marginLeft:"30px"}}>
                <Link to={`/contacts/${contactDetail._id}/edit`}>Edit</Link>
            </button></div>
            
            {
                contactDetail.address.map((singleAddress)=>{
                    return <div style={{fontSize:"20px"}}>Address: {singleAddress} <button style={{fontSize:"16px"}}>
                    <Link to={`/contacts/${contactDetail._id}/edit`}>Edit</Link>
                </button></div>
                    
                })
                
            // Object.keys(contactDetail.address).map(function(key) {
            //     return <div>{contactDetail.address[key]}</div> 
            // })
            }
            
        </div>
    )
        
   
    
}

export default ContactDetail
