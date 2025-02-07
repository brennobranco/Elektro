import { useState } from "react";
import ProductSection, { ProductSectionProps } from "../productsSection/ProductSection";
import SearchAndFilter from "../SearchAndFilter/SearchAndFilter";

interface SearchableProductSectionProps extends ProductSectionProps {
    img: string;
}

export const SearchableProductSection = ({ data, img }: SearchableProductSectionProps) => {

    const [searchableTerm, setSearchableTerm] = useState('');

    const filteredData = data.filter(item => item.text.toLocaleLowerCase().includes(searchableTerm.toLowerCase()))

    return (
        <>
            <SearchAndFilter img={img} onChangeText={setSearchableTerm} />
            <ProductSection carrousel={false} data={filteredData} />
        </>
    );
}