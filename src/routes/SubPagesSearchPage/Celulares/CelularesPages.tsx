import ProductSection from "../../../components/productsSection/ProductSection"
import { CellPageDB } from "../../../data/CellPage/CellPage"

const CellPage = () => {
    return (
        <ProductSection carrousel={false} data={CellPageDB} />
    )
}

export default CellPage