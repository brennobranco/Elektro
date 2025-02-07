import { Container, InputContainer } from "./SearchInputStyle"
import Lupa from '../../assets/LupaClara.svg'

const SearchInput = () => {
    return (
        <Container>
            <InputContainer>
                <img src={Lupa} alt="Lupa" />
                <input type="search" placeholder="Encontrar na Elektro" />
            </InputContainer>
        </Container>
    )
}

export default SearchInput