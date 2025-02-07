import { TvPageDB } from "../../../data/TvPage/TvPageDB"
import { SearchableProductSection } from "../../../components/searchableProductsSection/searchableProductsSection"
import FilterImg from '../../../assets/FiltroY.svg'

const TvPage = () => {
    return (
        <SearchableProductSection carrousel={false} data={TvPageDB} img={FilterImg} />
    )
}

export default TvPage