import { classNames } from 'shared/lib/classNames/classNames';
import cls from './progress.module.scss';

interface ProgressProps {
    className?: string;
    percentage?: number;
}

export const Progress = ({ className = '', percentage = 0 }: ProgressProps) => {
    return (
        <div className={classNames(cls.progress, {}, [className])}>
            <div className={cls.filled} style={{ width: `${percentage}%` }}></div>
        </div>
    );
};
