import React, { useState } from 'react';
import {NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler, Navbar} from "reactstrap";
import logo from '../Images/streemly_logo.png';

const NavBar = () => {

    const [collapsed, setCollapsed] = useState(false);
    const toggleNavBar = () => setCollapsed(!collapsed);
    
    const menuClick = () => {
        console.log(collapsed);
        setCollapsed(collapsed);
    }

    return (
        <div>
            <Navbar className="streemly-red">
                <NavbarBrand href="/" className="mr-auto"> <img className='streemly-logo' src={logo} width='120' height='50' alt='streemly logo' /></NavbarBrand>
                <NavbarToggler onClick={toggleNavBar}>
                   <img className="streemly-logo" src={logo} width='120' height='50' alt="guider logo" />
                </NavbarToggler>
                <Collapse isOpen={collapsed} onClick={menuClick} >
                    <Nav navbar>
                        <NavItem className="streemly-red2">
                           <NavLink href="/login">Login</NavLink>
                        </NavItem>
                        <NavItem className="streemly-red2">
                            <NavLink href="/signup">Sign Up</NavLink>
                        </NavItem>
                        <NavItem className="streemly-red2">
                           <NavLink href="/directory">Directory</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;