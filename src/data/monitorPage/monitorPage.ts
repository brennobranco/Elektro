import monitor1 from './img/monitor.png'

interface MonitorDBProps {
    id: number;
    img: string;
    text: string;
    price: number;
}

export const MonitorPageDB: MonitorDBProps[] = [
    {
        id: 1,
        img: monitor1,
        text: 'Monitor Dell 24"',
        price: 799
    },
]