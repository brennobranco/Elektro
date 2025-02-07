import { HeaderStyled } from "./HeaderStyle";
import { HeaderImgStyle } from "./HeaderStyle";
import { SearchButton } from "./HeaderStyle";
import searchIcon from '../../assets/search.svg'
import './Header.styles.css';
import { useNavigate } from "react-router-dom";

interface HeaderProps {
    className: "BlackHeader" | "WhiteHeader";
    firstImgSrc?: string;
    secondImgSrc?: string;
    searchButton: boolean;
    location?: string;
    text: string;
    fstButtonOnCLick?: () => void;
}
const Header: React.FC<HeaderProps> = ({ className, firstImgSrc, secondImgSrc, searchButton, text, location, fstButtonOnCLick }) => {

    const navigate = useNavigate();

    return (
        <HeaderStyled className={className}>
            <HeaderImgStyle>
                {firstImgSrc ? <img src={firstImgSrc} alt="imagem" onClick={fstButtonOnCLick} /> : ""}
            </HeaderImgStyle>

            {searchButton ?
                <SearchButton onClick={() => navigate(`/${location}`)}>
                    <img src={searchIcon} alt="Ícone Pesquisar" />{text}
                </SearchButton> : text
            }

            <HeaderImgStyle>
                {secondImgSrc ? <img src={secondImgSrc} alt="imagem" /> : ""}
            </HeaderImgStyle>
        </HeaderStyled>
    )
}

export default Header