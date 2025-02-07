import { SearchableProductSection } from "../../../components/searchableProductsSection/searchableProductsSection"
import { CellPageDB } from "../../../data/CellPage/CellPage"
import FilterImg from '../../../assets/FiltroY.svg'

const CellPage = () => {
    return (
        <SearchableProductSection carrousel={false} data={CellPageDB} img={FilterImg} />
    )
}

export default CellPage