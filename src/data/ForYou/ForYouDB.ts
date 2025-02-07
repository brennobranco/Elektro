import telefone1 from './img/tel1.png'
import telefone2 from './img/tel2.png'

interface Product {
    id: number;
    img: string;
    text: string;
    price: number;
}

export const ForYouDB: Product[] = [
    {
        id: 1,
        img: telefone1,
        text: "Celular",
        price: 1800
    },
    {
        id: 2,
        img: telefone2,
        text: "Celular",
        price: 1680
    },
    {
        id: 3,
        img: telefone1,
        text: "Celular",
        price: 1720
    },
    {
        id: 4,
        img: telefone2,
        text: "Celular",
        price: 2250
    }
]