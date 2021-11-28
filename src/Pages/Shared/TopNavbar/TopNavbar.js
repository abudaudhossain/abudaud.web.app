import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import "./TopNavbar.css"

const TopNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand className="brand-name" as={Link} to="/home">
                        Abu<span className="text-color">Daud.</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="nav-item" as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link className="nav-item" as={NavLink} to="/about">About Us </Nav.Link>
                        <Nav.Link className="nav-item" as={NavLink} to="/contact">Contact Us </Nav.Link>
                        <Nav.Link className="nav-item"  as={NavLink} to="/portfolio">Portfolio</Nav.Link>

                    </Nav>
                    <Nav className="extra-menu">
                        <Button variant="outline-success">Resume</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNavbar;