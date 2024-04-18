/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './input.module.scss';

type HTMLInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    type?: string;
    value?: string;
    onChange?: (value: string) => void;
    validate?: (value: string) => boolean;
    placeholder?: string;
	autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
	const {
		className = '', type = 'text', value = '', onChange, validate, placeholder, autofocus, ...otherProps
	} = props;

    const [focused, setFocused] = useState(false);
    const [alarm, setAlarm] = useState(false);
    
    const mods: Record<string, boolean> = {
		[cls.alarm]: alarm ?? false,
		[cls.focused]: focused ?? false
	};

    useEffect(() => {
        const result = validate?.(value) ?? true;
        let handler: null | NodeJS.Timeout = null;

        if (!result) {
            setAlarm(true);
            
            handler = setTimeout(() => {
                setAlarm(false);
                onChange?.('');
            }, 4000);

        } else setAlarm(false);

        return () => {
            if (handler !== null) clearTimeout(handler)
        };
    }, [value]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => 
        onChange?.(e.target.value);

	return (
		<div className={classNames(cls.wrapper, mods, [className])}>
			<input
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                placeholder={placeholder}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                autoFocus={autofocus}
                {...otherProps}
            />
            { alarm ? 
                <p className={cls.error_message}>Error Text</p>
                : null
            }
		</div>
	);
});

