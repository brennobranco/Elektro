import { ProductContainer, InfoContainer, PriceContainer } from "./ProductStyle"
import HeartImg from '../../assets/love.svg'
import { formatPrice } from "../../utils/formatPrice";

interface ProductProps {
    text: string;
    src: string;
    alt: string;
    price: number;
}

const Product: React.FC<ProductProps> = ({ text, src, alt, price }) => {
    return (
        <ProductContainer>
            <img src={src} alt={alt} />
            <InfoContainer>
                <PriceContainer>
                    <p>{text}</p>
                    <h3>{formatPrice(price)}</h3>
                </PriceContainer>
                <img src={HeartImg} alt="Favoritar" />
            </InfoContainer>
        </ProductContainer>
    )
}

export default Product