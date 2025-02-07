import { StyledDiv } from './NavbarIconsStyle'
import { StyledLink } from './NavbarIconsStyle'

interface NavbarIconsProps {
    src: string;
    alt: string;
    text: string;
    location: string;
}

const NavbarIcons: React.FC<NavbarIconsProps> = ({ src, alt, text, location }) => {
    return (
        <StyledLink to={`/${location}`} >
            <StyledDiv >
                <img src={src} alt={alt} />
                <p>{text}</p>
            </StyledDiv>
        </StyledLink >
    )
}

export default NavbarIcons