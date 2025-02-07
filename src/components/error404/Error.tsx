import { ErrorContainer } from "./ErrorStyle"
import errorImg from './img/Error.png'

interface ErrorProps {
    message: string;
}

const Error = ({ message }: ErrorProps) => {
    return (
        <ErrorContainer>
            <h1>Opsss...</h1>
            <img src={errorImg} alt="Imagem de erro" />
            <p>{message}</p>
        </ErrorContainer>
    )
}

export default Error