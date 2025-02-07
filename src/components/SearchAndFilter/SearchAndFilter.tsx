import { Container, FilterContainer, InputAndFilterContainer } from "./SearchAndFilterStyle"
import Input from '../searchInput/SearchInput'

interface SearchAndFilterProps {
    img: string;
    onChangeText: (value: string) => void

}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ img, onChangeText }) => {
    return (
        <Container>
            <InputAndFilterContainer>
                <Input onChangeText={onChangeText} />
                <FilterContainer>
                    <img src={img} alt="Filter Image" />
                    <p>Filtro</p>
                </FilterContainer>
            </InputAndFilterContainer>
        </Container>
    )
}

export default SearchAndFilter