import Tv1 from './img/Tv1.png'
import Tv2 from './img/Tv2.png'
import Tv3 from './img/Tv3.png'
import Tv4 from './img/Tv4.png'
import Tv5 from './img/Tv5.png'
import Tv6 from './img/Tv6.png'

interface TvPageProps {
    id: number;
    img: string;
    text: string;
    price: number;
}

export const TvPageDB: TvPageProps[] = [
    {
        id: 1,
        img: Tv1,
        text: "TV LG",
        price: 2000
    },
    {
        id: 2,
        img: Tv2,
        text: "TV Samsung",
        price: 1400
    },
    {
        id: 3,
        img: Tv3,
        text: "TV TCL",
        price: 1000
    },
    {
        id: 4,
        img: Tv4,
        text: "TV Semp",
        price: 2000
    },
    {
        id: 5,
        img: Tv5,
        text: "TV AOC",
        price: 1300
    },
    {
        id: 6,
        img: Tv6,
        text: "TV Philips",
        price: 1400
    },
]