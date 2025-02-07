import ProductSection from "../../../components/productsSection/ProductSection"
import { TvPageDB } from "../../../data/TvPage/TvPageDB"

const TvPage = () => {
    return (
        <ProductSection carrousel={false} data={TvPageDB} />
    )
}

export default TvPage