import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './image.module.scss';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
}

export const Image = ({ className = '', src = '', alt = '' }: ImageProps) => {
    const [imageError, setImageError] = useState(false);
    const seed = Math.floor(Math.random() * 1000);

    const handleImageError = () => setImageError(true); 

    return (
        <div className={classNames(cls.image, {}, [className])}>
            {imageError ? (
                <img src={`https://picsum.photos/200/300?random=${seed}`} alt="Mock image" />
            ) : (
                <img src={src} alt={alt} onError={handleImageError} />
            )}
        </div>
    );
};
