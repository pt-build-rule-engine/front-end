import React, { useState } from 'react';
import {NavbarBrand, Nav, NavItem, NavLink, Collapse, NavBarToggler, Navbar} from "reactstrap";

const NavBar = () => {

    const [collapsed, setCollapsed] = useState(false);
    const toggleNavBar = () => setCollapsed(!collapsed);
    
    const menuClick = () => {
        console.log(collapsed);
        setCollapsed(collapsed);
    }

    return (
        <div>
            <Navbar>
                <NavbarBrand></NavbarBrand>
                <NavbarToggler onClick={toggleNavBar}>
                   
                </NavbarToggler>
                <Collapse isOpen={collapsed} onClick={menuClick} >
                    <Nav navbar>
                        <NavItem>
                           <NavLink href="/login">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/signup">Sign Up</NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink href="/directory">Directory</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;