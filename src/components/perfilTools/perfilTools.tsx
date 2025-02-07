import { PerfilToolsStyle } from "./perfilToolsStyle"

interface PerfilToolsProps {
    src: string;
    alt: string;
    text: string;
}

const PerfilTools: React.FC<PerfilToolsProps> = ({ src, alt, text }) => {
    return (
        <PerfilToolsStyle>
            <img src={src} alt={alt} />
            <p>{text}</p>
        </PerfilToolsStyle>
    )
}

export default PerfilTools