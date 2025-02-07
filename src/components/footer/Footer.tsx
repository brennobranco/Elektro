import { FooterContainer, LinksContainer } from "./FooterStyle";

interface Links {
    img: string;
    alt: string
}

interface FooterProps {
    text: string;
    data: Links[]
}

const Footer: React.FC<FooterProps> = ({ text, data }) => {
    return (
        <FooterContainer>
            <h2>{text}</h2>
            <LinksContainer>
                {data.map((elem, index) => (
                    <img src={elem.img} alt={elem.alt} key={index}></img>
                ))}
            </LinksContainer>
        </FooterContainer>
    )
}

export default Footer