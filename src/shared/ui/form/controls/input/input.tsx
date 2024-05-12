import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input as InputUI } from 'shared/ui/input/input';
import { InputProps as InputPropsUI } from 'shared/ui/input/input.types';

export interface InputProps extends InputPropsUI {
    className?: string;
}

export const Input = memo(({ className = '', ...rest }: InputProps) => {
    return (
        <InputUI 
            className={classNames('', {}, [className])} 
            {...rest}
        />
    );
});
