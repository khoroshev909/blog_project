import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, InputHTMLAttributes, useEffect, useRef, memo,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>
interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string,
    onChange?: (val: string) => void,
    type?: string,
    placeholder?: string,
    modal?: boolean,
    readOnly?: boolean
}
export const Input = memo((props: InputProps) => {
    const {
        className,
        autoFocus,
        value,
        onChange,
        readOnly,
        type = 'text',
        placeholder,
        ...rest
    } = props;

    const inputRef = useRef<HTMLInputElement | null>(null);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autoFocus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [autoFocus]);

    const mods: Mods = {
        [cls.readonly]: readOnly,
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {placeholder && (
                <div>{placeholder}</div>
            )}
            <input
                ref={inputRef}
                className={cls.Input}
                readOnly={readOnly}
                {...rest}
                type={type}
                value={value}
                onChange={changeHandler}
            />
        </div>
    );
});
