import { TopicContainer } from "./TopicStyle"

interface TopicProps {
    src: string;
    alt: string;
    text: string;
}

const Topic: React.FC<TopicProps> = ({ src, alt, text }) => {
    return (
        <TopicContainer >
            <img src={src} alt={alt} />
            <p>{text}</p>
        </TopicContainer>
    )
}

export default Topic