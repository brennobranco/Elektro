import cel1 from './img/tel1.png'
import cel2 from './img/cell.png'
import tel2 from './img/tel2.png'

interface CellDBProps {
    id: number;
    img: string;
    text: string;
    price: number;
}

export const CellPageDB: CellDBProps[] = [
    {
        id: 1,
        img: cel1,
        text: "Motorola",
        price: 2000
    },
    {
        id: 2,
        img: cel2,
        text: "Iphone 15 Pro",
        price: 1400
    },
    {
        id: 3,
        img: tel2,
        text: "Asus Pro",
        price: 1000
    }
]