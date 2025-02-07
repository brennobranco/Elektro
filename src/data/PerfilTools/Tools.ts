import MyData from './img/MeusDados.svg'
import MyProducts from './img/MeusProdutos.svg'
import MyFavorites from './img/MeusFavoritos.svg'
import MyCart from './img/MeuCarrinho.svg'
import MyTickets from './img/Ticket.svg'
import MyChats from './img/ChatCircleDots.svg'

interface ToolsProps {
    img: string;
    text: string;
}

export const Tools: ToolsProps[] = [
    {
        img: MyData,
        text: "Meus dados"
    },
    {
        img: MyProducts,
        text: "Meus produtos"
    },
    {
        img: MyFavorites,
        text: "Meus favoritos"
    },
    {
        img: MyCart,
        text: "Meus dados"
    },
    {
        img: MyTickets,
        text: "Meus carrinhos"
    },
    {
        img: MyChats,
        text: "Meus chats"
    },
]