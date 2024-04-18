/* eslint-disable react-refresh/only-export-components */
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear',
	DEFAULT = 'default',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	type?: "button" | "submit" | "reset" | undefined;
	theme?: ThemeButton;
	square?: boolean;
	disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
	const {
		className = '', 
		children, 
		type = "button", 
		theme = ThemeButton.DEFAULT, 
		square, 
		disabled, 
		...otherProps
	} = props;

	const mods: Record<string, boolean> = {
		[cls.square]: square ?? false,
		[cls.disabled]: disabled ?? false,
	};

	return (
		<button
			type={type}
			className={classNames(cls.button, mods, [className, cls[theme]])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
};
