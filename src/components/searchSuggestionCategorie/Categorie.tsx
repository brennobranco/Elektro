import Button from "../button/Button";
import { Container } from "./CategorieStyle"

interface CategorieProps {
    img: string;
    text: string;
    location: string;
}

const Categorie: React.FC<CategorieProps> = ({ img, text, location }) => {
    return (
        <Container>
            <img src={img} alt={text} />
            <Button size="medium" textColor="black" text={text} location={location} />
        </Container>
    )
}

export default Categorie