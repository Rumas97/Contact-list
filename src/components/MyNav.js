import React from  'react'
import {Navbar, Container} from  'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';


function MyNav() {
	return (
		
            <Navbar expand="lg" variant="light" bg="light">
                <Navbar.Brand href="/">Contacts</Navbar.Brand>
                <Navbar.Brand href="/create">Add a new contact</Navbar.Brand>
            </Navbar>
       
	)
}
export default MyNav