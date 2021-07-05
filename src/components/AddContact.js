import React from 'react'
import {TextField, Button} from '@material-ui/core'

function AddContact(props) {
    const{onAdd}=props
    return (
        <div>
           <form onSubmit={onAdd} noValidate autoComplete="off">
                <TextField name="firstName" label="Firstname" />
                <TextField name="lastName" label="Lastname" />
                <TextField name="address" label="address" />
                <Button type="submit" variant="contained" color="primary">Submit</Button>
            </form> 
        </div>
    )
}

export default AddContact
