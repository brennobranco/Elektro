import cel from './img/cell.png'
import relogio from './img/relogio.png'

interface Product {
    id: number;
    img: string;
    text: string;
    price: number;
}

export const BestSellingProducts: Product[] = [
    {
        id: 1,
        img: cel,
        text: "Smartphone",
        price: 3200
    },
    {
        id: 2,
        img: relogio,
        text: "Smartwatch",
        price: 800
    },
    {
        id: 3,
        img: cel,
        text: "Smartphone",
        price: 4000
    },
    {
        id: 4,
        img: relogio,
        text: "Smartwatch",
        price: 1100
    }
]