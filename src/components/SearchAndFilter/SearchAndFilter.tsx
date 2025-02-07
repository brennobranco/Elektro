import { Container, FilterContainer, InputAndFilterContainer } from "./SearchAndFilterStyle"
import Input from '../searchInput/SearchInput'

interface SearchAndFilterProps {
    img: string;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ img }) => {
    return (
        <Container>
            <InputAndFilterContainer>
                <Input />
                <FilterContainer>
                    <img src={img} alt="Filter Image" />
                    <p>Filtro</p>
                </FilterContainer>
            </InputAndFilterContainer>
        </Container>
    )
}

export default SearchAndFilter