import { StyledNavbar } from './NavbarStyle'
import NavbarIcons from './NavbarIcons'

import HouseIcon from "./img/House.svg";
import ChatIcon from "./img/ChatCircleDots.svg";
import NotificationIcon from "./img/Bell.svg";
import PerfilIcon from "./img/Person.svg";


const Navbar = () => {
    return (
        <StyledNavbar>
            <NavbarIcons src={HouseIcon} alt="Home" text="Home" location="Home" />
            <NavbarIcons src={ChatIcon} alt="Chat" text="Chat" location="Chat" />
            <NavbarIcons src={NotificationIcon} alt="Avisos" text="Avisos" location="Notification" />
            <NavbarIcons src={PerfilIcon} alt="Perfil" text="Perfil" location="Perfil" />
        </StyledNavbar>
    )
}

export default Navbar