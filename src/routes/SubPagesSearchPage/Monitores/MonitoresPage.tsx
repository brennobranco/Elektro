import { MonitorPageDB } from "../../../data/monitorPage/monitorPage"
import FilterImg from '../../../assets/FiltroY.svg'
import { SearchableProductSection } from "../../../components/searchableProductsSection/searchableProductsSection";


const MonitorPage = () => {
    return (
        <SearchableProductSection carrousel={false} data={MonitorPageDB} img={FilterImg} />
    )
}

export default MonitorPage