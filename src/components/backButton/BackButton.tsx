import { useNavigate } from "react-router-dom"
import arrow from "../../assets/backArrow.svg"
import { ButtonStyle } from "./BackButtonStyle";

interface BackButtonProps {
    location: string;
}

const BackButton = ({ location }: BackButtonProps) => {

    const navigate = useNavigate();

    return (
        <ButtonStyle><img src={arrow} alt="Botão para voltar" onClick={() => { navigate(`/${location}`) }} /></ButtonStyle>
    )
}

export default BackButton