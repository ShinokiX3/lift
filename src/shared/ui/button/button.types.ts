export enum ThemeButton {
	CLEAR = 'clear',
	DEFAULT = 'default',
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	type?: "button" | "submit" | "reset" | undefined;
	theme?: ThemeButton;
	square?: boolean;
	disabled?: boolean;
}