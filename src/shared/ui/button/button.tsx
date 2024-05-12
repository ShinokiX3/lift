/* eslint-disable react-refresh/only-export-components */
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './button.module.scss';
import { ButtonProps, ThemeButton } from './button.types';

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
