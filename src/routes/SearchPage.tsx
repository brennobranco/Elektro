import Header from "../components/header/Header"
import Hambuguer from '../assets/blackHamburguer.svg'
import noUser from '../assets/fillBlackNoUSer.svg'
import HamburguerMenu from "../components/hamburguerMenu/HamburguerMenu"
import { useState } from "react"
import Navbar from "../components/navbar/Navbar"
import { MainContainer } from "../pages/SearchPage/SearchPageStyle"
import { Outlet } from "react-router-dom"


const SearchPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
            <HamburguerMenu isOpen={isModalOpen} onClose={handleCloseModal} />

            <Header className="WhiteHeader" text="Pesquisar" firstImgSrc={Hambuguer} searchButton={false} secondImgSrc={noUser} fstButtonOnCLick={handleOpenModal} />

            <MainContainer>
                <Outlet />
            </MainContainer>

            <Navbar />
        </>
    )
}

export default SearchPage