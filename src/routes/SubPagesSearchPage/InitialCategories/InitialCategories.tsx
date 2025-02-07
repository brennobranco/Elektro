import { SearchSuggestion } from "./InitialCategoriesStyle"
import { SearchCategories } from "../../../data/SearchPageCategories/SearchCategories"
import Categorie from "../../../components/searchSuggestionCategorie/Categorie"

const InitialCategories = () => {
    return (
        <>
            <SearchSuggestion>Sugestão de busca</SearchSuggestion>
            {
                SearchCategories.map((elem, index) => (
                    <Categorie img={elem.img} text={elem.text} key={index} location={elem.location} />
                ))
            }
        </>
    )
}

export default InitialCategories