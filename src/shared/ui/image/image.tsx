import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './image.module.scss';
import { ImageLoading } from 'shared/assets/svg/icons';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
}

export const Image = ({ className = '', src = '', alt = '' }: ImageProps) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const seed = Math.floor(Math.random() * 1000);

    const handleImageError = () => { setImageError(true); setImageLoaded(true); }
    const handleImageLoaded = () => setImageLoaded(true);

    return (
        <div className={classNames(cls.image, {}, [className])}>
            {!imageLoaded ? 
                <ImageLoading width="100%" height="100%" />
                : null
            }
            {imageError ? (
                <img src={`https://picsum.photos/200/300?random=${seed}`} alt="Mock image" />
            ) : (
                <img src={src} alt={alt} onError={handleImageError} onLoad={handleImageLoaded} />
            )}
        </div>
    );
};
