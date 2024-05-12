export type HTMLInputProps = 
    Omit<
        React.InputHTMLAttributes<HTMLInputElement>, 
        'value' | 'onChange'
    >

export interface InputProps extends HTMLInputProps {
    className?: string;
    type?: string;
    value?: string;
    onChange?: (value: string) => void;
    validate?: (value: string) => boolean;
    placeholder?: string;
	autofocus?: boolean;
}