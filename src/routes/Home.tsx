import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Hamburguer from '../assets/Hamburguer.svg';
import Carrinho from '../pages/HomeScrean/img/Carrinho.svg';
import titleImg from '../assets/raio elektro 1.png';
import FirstCarrouselImg from '../pages/HomeScrean/img/carrouselImg.png';
import { CategoriesDB } from '../data/Categories/categoriesDB';
import { ForYouDB } from '../data/ForYou/ForYouDB';
import { FeuturedProducts } from '../data/feuturedProducts/feuturedProducts';
import { BestSellingProducts } from '../data/bestSellingProducts/bestSellingProducts';
import { FooterLinks } from '../data/footerLinks/footerLinks';
import { useState } from 'react';
import { CarrouselContainer, CarrouselImg, Dots, DotsContainer, FirstDot, MainContainer, TitleContainer } from '../pages/HomeScrean/HomeStyle';
import Vitrine from '../components/vitrineSection/Vitrine';
import ProductSection from '../components/productsSection/ProductSection';
import HamburguerMenu from '../components/hamburguerMenu/HamburguerMenu';

const Home = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
            <HamburguerMenu isOpen={isModalOpen} onClose={handleCloseModal} />
            <Header
                className='BlackHeader'
                firstImgSrc={Hamburguer}
                secondImgSrc={Carrinho}
                searchButton={true}
                text='Encontrar na Elektro'
                location='Search/Categories'
                fstButtonOnCLick={handleOpenModal}
            />

            <MainContainer>

                <TitleContainer>
                    <img src={titleImg} alt="Elektro" />
                    <h1>Bem-vindo à Elektro!</h1>
                </TitleContainer>

                <CarrouselContainer>
                    <CarrouselImg>
                        <img src={FirstCarrouselImg} alt="Imagem" />
                    </CarrouselImg>
                    <DotsContainer>
                        <FirstDot />
                        <Dots />
                        <Dots />
                    </DotsContainer>
                </CarrouselContainer>

                <Vitrine title='Categoria' key={10} data={CategoriesDB} />

                <ProductSection title='Para você' data={ForYouDB} carrousel={true} />

                <ProductSection title='Produtos em destaque' data={FeuturedProducts} carrousel={true} />

                <ProductSection title='Mais vendidos' data={BestSellingProducts} carrousel={true} />

            </MainContainer>

            <Footer text='Siga-nos nas redes sociais!' data={FooterLinks} />
            <Navbar />
        </>
    )
}

export default Home