import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
.navbar-brand{
    color: white;
    font-size: 28px;
    font-weight: 900;
    
    &:hover{
        color:red;
    }
}
.nav-item{
    font-weight: 700;
    font-size: 22px;
    
}
`

function NavigationBar(){
    return(
        <Styles>
        <Navbar bg="primary" expand="lg">
            <Navbar.Brand href="/">Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Item><Nav.Link href="/" >Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/about">About Us</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/service">Our Services</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/contact">Contact Us</Nav.Link></Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Styles>
      

    )
  }


export default NavigationBar;