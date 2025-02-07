import { useState, useEffect, useRef } from 'react'
import { ProductGroupStyled, MotionDiv } from './ProductGroupStyle'
import Product from './Product';
import { Products } from './ProductSection';

interface ProductProp {
    products: Products[];
    carrousel: boolean;
}

const ProductGroup: React.FC<ProductProp> = ({ products, carrousel }) => {

    const carousel = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, [])

    return (
        carrousel ? (
            <MotionDiv
                ref={carousel}
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
            >
                {products.map((elem => (
                    <Product text={elem.text} src={elem.img} alt={elem.text} price={elem.price} key={elem.id} />
                )))}
            </MotionDiv>
        ) : (
            <ProductGroupStyled>
                {products.map((elem => (
                    <Product text={elem.text} src={elem.img} alt={elem.text} price={elem.price} key={elem.id} />
                )))}
            </ProductGroupStyled>
        )
    )
}

export default ProductGroup