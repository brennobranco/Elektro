import tv from './img/tv4k.png'
import monitor from './img/monitor.png'

interface Product {
    id: number;
    img: string;
    text: string;
    price: number;
}

export const FeuturedProducts: Product[] = [
    {
        id: 1,
        img: tv,
        text: "Smart TV",
        price: 1500
    },
    {
        id: 2,
        img: monitor,
        text: "monitor",
        price: 750
    },
    {
        id: 3,
        img: tv,
        text: "Smart TV",
        price: 2100
    },
    {
        id: 4,
        img: monitor,
        text: "monitor",
        price: 630
    }
]