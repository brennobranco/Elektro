import Navbar from "../components/navbar/Navbar"
import { ButtonContainer, HeaderStyle, MainStyle, ToolsGroup } from "../pages/PerfilScreen/perfilStyle"
import logo from "../assets/raio elektro 1.png"
import engrenagem from '../pages/PerfilScreen/img/engrenagem.svg'
import noUserImg from '../assets/noUserSemFundo.svg'
import Button from "../components/button/Button"
import { Tools } from "../data/PerfilTools/Tools"
import PerfilTools from "../components/perfilTools/perfilTools"

const Perfil = () => {
    return (
        <>
            <HeaderStyle>
                <img src={logo} alt="Logo" />
                <img src={engrenagem} alt="Configurações" />
            </HeaderStyle>
            <MainStyle>
                <img src={noUserImg} alt="Imagem do usuário" />
                <ButtonContainer>
                    <Button size="small" text="Entrar" textColor="white" location="login" />
                    <Button size="small" text="Cadastrar" textColor="white" location="cadastro" />
                </ButtonContainer>
                <ToolsGroup>
                    {Tools.map((elem, index) => (
                        <PerfilTools src={elem.img} alt={elem.text} text={elem.text} key={index} />
                    ))}
                </ToolsGroup>
            </MainStyle>
            <Navbar />
        </>
    )
}

export default Perfil