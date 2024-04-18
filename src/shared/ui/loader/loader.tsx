import { classNames } from 'shared/lib/classNames/classNames';
import cls from './loader.module.scss';
import { SpinnerIcon } from 'shared/assets/svg/icons';

interface LoaderProps {
    className?: string;
    size?: string;
}

export const Loader = ({ className = '', size = '25px' }: LoaderProps) => {
    return (
        <div 
            className={classNames(cls.loader, {}, [className])} 
            style={{ width: size, height: size }}
        >
            <SpinnerIcon />
        </div>
    );
};
