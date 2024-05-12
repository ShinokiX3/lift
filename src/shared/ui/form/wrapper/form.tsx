import { classNames } from 'shared/lib/classNames/classNames';
import cls from './form.module.scss';
import { Input, InputProps } from '../controls/input/input';
import { Submit, SubmitProps } from '../controls/submit/submit';
import { Checkbox, CheckboxProps } from '../controls/checkbox/checkbox';
import { useCallback } from 'react';

interface FormControls {
    Input?: React.ReactElement<InputProps>; 
    Checkbox?: React.ReactElement<CheckboxProps>;
    Submit?: React.ReactElement<SubmitProps>;
}
    
interface FormProps extends 
    FormControls, 
    React.FormHTMLAttributes<HTMLFormElement> 
{
    className?: string;
    children?: React.ReactNode;
}

const Form = ({ className = '', children }: FormProps) => {
    const submit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }, [])

    return (
        <form 
            onSubmit={submit}
            className={classNames(cls.form, {}, [className])}
        >
            { children }
        </form>
    );
};

Form.Input = Input;
Form.Submit = Submit;
Form.Checkbox = Checkbox;

export default Form;