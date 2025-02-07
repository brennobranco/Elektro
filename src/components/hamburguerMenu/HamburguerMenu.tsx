import userImg from '../../assets/whiteNoUser.png'
import { ButtonClose, LinkGroup, MenuHeader, MenuStyle, StyledLink } from './HamburguerMenuStyle'

interface MenuProps {
    isOpen: boolean;
    onClose: () => void;
}

interface MenuItens {
    text: string;
    // possivel location
}

const menuItens: MenuItens[] = [
    {
        text: "Editar dados"
    },
    {
        text: "Meus pedidos"
    },
    {
        text: "Meus produtos"
    },
    {
        text: "Meu carrinho"
    }
]

const HamburguerMenu: React.FC<MenuProps> = ({ isOpen, onClose }) => {

    return (
        <MenuStyle $isOpen={isOpen}>
            <MenuHeader>
                <img src={userImg} alt="Foto do usuário" />
                <h1>Usuário</h1>
            </MenuHeader>
            <LinkGroup>
                {menuItens.map((elem, index) => (
                    <StyledLink to={"#"} key={index}>{elem.text}</StyledLink>
                ))}
            </LinkGroup>
            <ButtonClose onClick={onClose}>Sair</ButtonClose>
        </MenuStyle>
    )
}

export default HamburguerMenu