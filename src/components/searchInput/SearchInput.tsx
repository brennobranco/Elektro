import { Container, InputContainer } from "./SearchInputStyle"
import Lupa from '../../assets/LupaClara.svg'

interface SearchInput {
    onChangeText: (event: string) => void
}

const SearchInput = ({ onChangeText }: SearchInput) => {
    return (
        <Container>
            <InputContainer>
                <img src={Lupa} alt="Lupa" />
                <input type="search" placeholder="Encontrar na Elektro" onChange={e => onChangeText(e.target.value)} />
            </InputContainer>
        </Container>
    )
}

export default SearchInput