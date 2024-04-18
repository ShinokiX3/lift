import cls from './card.module.scss';
import { Image } from 'shared/ui/image/image';

interface CardProps {
    image: string
    title: string 
    year: string; 
}

const Card: React.FC<CardProps> = ({ title, year, image }) => {
    return (
        <div className={cls.wrapper}>
            <Image src={image} alt={title} />
            <h2>{title}</h2>
            <p>{year}</p>
        </div>
    );
};

export default Card;