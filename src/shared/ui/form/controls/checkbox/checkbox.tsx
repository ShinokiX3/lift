import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Checkbox as CheckboxUI } from 'shared/ui/checkbox/checkbox';
import { CheckboxProps as CheckboxPropsUI } from 'shared/ui/checkbox/checkbox.types';

export interface CheckboxProps extends CheckboxPropsUI {
    className?: string;
    children?: React.ReactNode;
}

export const Checkbox = memo(({ className = '', children, ...rest }: CheckboxProps) => {
    return (
        <CheckboxUI
            className={classNames('', {}, [className])}
            {...rest}
        >
            { children }
        </CheckboxUI>
    );
});
