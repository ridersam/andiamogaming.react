import { Navbar, NavbarBrand } from "reactstrap";
import Logo from '../app/assets/img/earthlogo2.png';

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
             <NavbarBrand href='/'>
                 <img src={Logo} alt='nucamp logo' />
             </NavbarBrand>
     </Navbar>
    )
};

export default Header;