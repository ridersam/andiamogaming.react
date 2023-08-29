import { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import Logo from '../app/assets/img/earthlogo2.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark sticky='top' expand='md'>
            <NavbarBrand href='/' className="ms-5">
                <img src={Logo} alt='nucamp logo' className="float-start" />
                <h1 className="mt-1">Andiamo Gaming</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => {setMenuOpen(!menuOpen)}} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className="ms-auto" navbar >
                    <NavItem >
                        <NavLink className="nav-link" to='/'>
                        <i className="fa fa-home fa-lg" /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/products'>
                        <i className="fa fa-list fa-lg" /> Products
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/games'>
                        <i className="fa fa-list fa-lg" /> Games
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/aboutus'>
                        <i className="fa fa-info fa-lg" /> About
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
};

export default Header;