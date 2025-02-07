import { ProductSectionStyle } from "./ProductSectionStyle"
import ProductGroup from "./ProductGroup";

export interface Products {
    id: number;
    img: string;
    text: string;
    price: number;
}

export interface ProductSectionProps {
    title?: string;
    data: Products[];
    carrousel: boolean;
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, data, carrousel }) => {
    return (
        <ProductSectionStyle>
            {title ? <h2>{title}</h2> : ""}
            <ProductGroup products={data} carrousel={carrousel} />
        </ProductSectionStyle>
    )
}

export default ProductSection