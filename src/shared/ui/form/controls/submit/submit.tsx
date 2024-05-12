import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/button/button';
import { ButtonProps, ThemeButton } from 'shared/ui/button/button.types';

export interface SubmitProps extends ButtonProps {
    className?: string;
    children?: React.ReactNode;
    message?: string;
}

export const Submit = memo(({ className = '', children, message, ...rest }: SubmitProps) => {
    return (
        <Button 
            type='submit' 
            theme={ThemeButton.DEFAULT}
            className={classNames('', {}, [className])}
            {...rest}
        >
            { children ?? message }
        </Button>     
    );
});
