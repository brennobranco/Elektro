import ProductSection from "../../../components/productsSection/ProductSection"
import { MonitorPageDB } from "../../../data/monitorPage/monitorPage"

const MonitorPage = () => {
    return (
        <ProductSection carrousel={false} data={MonitorPageDB} />
    )
}

export default MonitorPage