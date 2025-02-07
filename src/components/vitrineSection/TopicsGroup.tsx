import { TopicsGroupStyle } from "./TopicsGroupStyle"
import Topic from './Topic'
import { Category } from "./Vitrine";


interface TopicsGroupProps {
    categories: Category[];
}

const TopicsGroup: React.FC<TopicsGroupProps> = ({ categories }) => {
    return (
        <TopicsGroupStyle>
            {categories.map(((elem) => (
                <Topic text={elem.text} alt={elem.text} src={elem.img} key={elem.id} />
            )))}
        </TopicsGroupStyle>
    )
}


export default TopicsGroup