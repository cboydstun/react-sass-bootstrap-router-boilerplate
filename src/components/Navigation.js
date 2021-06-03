import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

export default function Navigation() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand>
                    <LinkContainer to="/">
                        <Nav.Link>This Site</Nav.Link>
                    </LinkContainer>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/grid">
                        <Nav.Link>Grid</Nav.Link>
                    </LinkContainer>   
                    <LinkContainer to="/register">
                        <Nav.Link>Register</Nav.Link>
                    </LinkContainer>                                                         
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}
