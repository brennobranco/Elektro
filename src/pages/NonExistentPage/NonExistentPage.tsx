import { GlobalStyle, MainContainer } from "./NonExistentPageStyle"
import Error from "../../components/error404/Error"
import Navbar from "../../components/navbar/Navbar"
import BackButton from "../../components/backButton/BackButton"

const NonExistentPage = () => {

    return (
        <>
            <GlobalStyle />
            <MainContainer>
                <Error message="Infelizmente, parece que a página desejada não existe!" />
            </MainContainer>
            <BackButton location="Home" />
            <Navbar />
        </>
    )
}

export default NonExistentPage