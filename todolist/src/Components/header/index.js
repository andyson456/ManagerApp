import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Header extends Component {
    constructor(props){
      super(props)
      this.state = {
      }
    }
    
      render() {
        return(
          <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/#home">Management App</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/todos">Tasks</Nav.Link>
            <Nav.Link href="/rankings">Rankings</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar>
        )
    }
}