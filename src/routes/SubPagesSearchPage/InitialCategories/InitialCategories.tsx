import { SearchSuggestion } from "./InitialCategoriesStyle"
import { SearchCategories } from "../../../data/SearchPageCategories/SearchCategories"
import Categorie from "../../../components/searchSuggestionCategorie/Categorie"
import SearchAndFilter from "../../../components/SearchAndFilter/SearchAndFilter"
import FilterImg from '../../../assets/FiltroG.svg'
import { useState } from "react"

const InitialCategories = () => {

    const [searchableTerm, setSearchbleTerm] = useState("");
    const filteredData = SearchCategories.filter(item => item.text.toLowerCase().includes(searchableTerm.toLowerCase()))

    return (
        <>
            <SearchAndFilter img={FilterImg} onChangeText={setSearchbleTerm} />
            <SearchSuggestion>Sugestão de busca</SearchSuggestion>
            {
                filteredData.map((elem, index) => (
                    <Categorie img={elem.img} text={elem.text} key={index} location={elem.location} />
                ))
            }
        </>
    )
}

export default InitialCategories