import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption<T> {
    value: T,
    text: string
}
interface SelectProps<T> {
    className?: string,
    label?: string,
    value?: T,
    onChange?: (value: T) => void
    options: SelectOption<T>[],
    readonly?: boolean
}
export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className, label, value, options, onChange, readonly,
    } = props;
    const mods: Mods = {};
    const optionList = useMemo(() => options.map((opt) => (
        <option
            key={opt.value}
            value={opt.value}
            className={cls.option}
        >
            {opt.text}
        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    };
    return (
        <div className={classNames(cls.SelectWrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>{label}</span>
            )}
            <select
                disabled={readonly}
                onChange={onChangeHandler}
                value={value}
                className={cls.select}
            >
                {optionList}
            </select>
        </div>
    );
};
