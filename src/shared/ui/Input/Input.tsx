import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, InputHTMLAttributes, useEffect, useRef,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string,
    onChange?: (val: string) => void,
    type?: string,
    placeholder?: string,
    modal?: boolean
}
export const Input = (props: InputProps) => {
    const {
        className,
        autoFocus,
        value,
        onChange,
        type = 'text',
        placeholder,
        ...rest
    } = props;

    const inputRef = useRef<HTMLInputElement>();

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autoFocus) {
            inputRef.current.focus();
        }
    }, [autoFocus]);

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div>{placeholder}</div>
            )}
            <input
                ref={inputRef}
                className={cls.Input}
                {...rest}
                type={type}
                value={value}
                onChange={changeHandler}
            />
        </div>
    );
};
