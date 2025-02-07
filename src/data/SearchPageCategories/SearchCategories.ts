import celular from './img/celular.png';
import monitor from './img/monitor.png'
import teclado from './img/teclado.png'
import televisao from './img/televisao.png'


interface SearchCategoriesProps {
    text: string;
    img: string;
    location: string;
}

export const SearchCategories: SearchCategoriesProps[] = [
    {
        text: "Televisores",
        img: televisao,
        location: "Search/tvs"
    },
    {
        text: "Celulares",
        img: celular,
        location: "Search/celulares"
    },
    {
        text: "Teclados",
        img: teclado,
        location: "Search/teclados"
    },
    {
        text: "Monitores",
        img: monitor,
        location: "Search/monitores"
    },
]