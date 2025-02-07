import { Container } from "./VitrineStyle";
import TopicsGroup from "./TopicsGroup";

export interface Category {
    id: number;
    img: string;
    text: string;
}

interface VitrineProps {
    title?: string;
    data: Category[];
}
const Vitrine: React.FC<VitrineProps> = ({ title, data }) => {
    return (
        <Container>
            {title ? <h2>{title}</h2> : ""}
            <TopicsGroup categories={data} />
        </Container>
    )
}

export default Vitrine