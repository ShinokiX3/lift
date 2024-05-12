export enum ThemeCheckbox {
	CLEAR = 'clear',
	DEFAULT = 'default',
}

export interface CheckboxProps extends React.ButtonHTMLAttributes<HTMLInputElement>  {
    className?: string;
    theme?: ThemeCheckbox;
    children?: React.ReactNode;
    checked?: boolean | undefined;
}