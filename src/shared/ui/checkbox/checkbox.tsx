/* eslint-disable react-refresh/only-export-components */
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './checkbox.module.scss';
import { CheckboxProps, ThemeCheckbox } from './checkbox.types';

export const Checkbox: React.FC<CheckboxProps> = (props) => {
    const {
		className = '', 
        children, 
        theme = ThemeCheckbox.DEFAULT,
        checked,
        onChange,
        ...otherProps
	} = props;

    return (
        <div className={classNames(cls.checkbox, {}, [className, cls[theme]])} {...otherProps}>
            <label className={cls.wrapper}>
                <input 
                    type="checkbox" 
                    className={cls.input} 
                    checked={checked} 
                    onChange={onChange} 
                />

                <span className={cls.tile}>
                    <span className={cls.label}>
                        {children}
                    </span>
                </span>
            </label>
        </div>
    );
};
