import celularesImg from './img/celulares.png'
import notebooks from './img/notebooks.png'
import tablets from './img/tablets.png'
import acessorios from './img/acessorios.png'
import tvs from './img/tvs.png'
import pcs from './img/pcs.png'
import perifericos from './img/perifericos.png'
import smartwatches from './img/smartwatches.png'

export interface Categories {
    id: number;
    img: string;
    text: string;
}

export const CategoriesDB: Categories[] = [
    {
        id: 1,
        img: celularesImg,
        text: "Celulares"
    },
    {
        id: 2,
        img: notebooks,
        text: "Notebooks"
    },
    {
        id: 3,
        img: tablets,
        text: "Tablets"
    },
    {
        id: 4,
        img: perifericos,
        text: "Periféricos"
    },
    {
        id: 5,
        img: tvs,
        text: "TVs"
    },
    {
        id: 6,
        img: acessorios,
        text: "Acessórios"
    },
    {
        id: 7,
        img: pcs,
        text: "PCs"
    },
    {
        id: 8,
        img: smartwatches,
        text: "Smartwatches"
    },
]
