import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "./ApresentationScreanStyled";
import img from '../../assets/raio elektro 1.png'

const ApresentationScrean = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate("/Home");
        }, 2000)

        return () => clearTimeout(timeout);
    }, [])

    return (
        <>
            <GlobalStyle />
            <img src={img} alt="Logo-Elektro" />
            <h1>ELEKTRO</h1>
        </>
    )
}

export default ApresentationScrean