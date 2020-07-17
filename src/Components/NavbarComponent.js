import React,{useState} from 'react'
import { FaIndustry } from 'react-icons/fa';

import {
    Collapse,
    Navbar,
    NavLink,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
function NavbarComponent() {const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(isOpen);
    return (
        <div>
        <Navbar color="light" light expand="md">
        <NavbarBrand > Navigate here <FaIndustry/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" href="#/">
              <span> Home </span>
          </NavLink>
            </NavItem>

            <NavItem>
            <NavLink  href="#/industry">
              <span> Industry </span>
          </NavLink>
            </NavItem>
            <NavItem>
            <NavLink className="nav-link" href="#/equipment">
              <span> Equipment </span>
          </NavLink>
            </NavItem>

            
        </Nav>
        </Collapse>
      </Navbar>
 
        </div>
    )
}

export default NavbarComponent
