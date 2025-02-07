import { useNavigate } from "react-router-dom";
import { ButtonStyle } from "./ButtonStyle"

interface ButtonProps {
    size: "small" | "medium";
    textColor: "white" | "black";
    text: string;
    location: string;
}

const Button: React.FC<ButtonProps> = ({ size, textColor, text, location }) => {

    const navigate = useNavigate();

    return <ButtonStyle size={size} $textColor={textColor} onClick={() => navigate(`/${location}`)}>{text}</ButtonStyle>
}

export default Button