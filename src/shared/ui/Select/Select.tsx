import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

interface SelectOption {
    value: string,
    text: string
}
interface SelectProps {
    className?: string,
    label?: string,
    value?: string,
    onChange?: (val: string) => void
    options: SelectOption[],
    readonly?: boolean
}
export const Select = memo((props: SelectProps) => {
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
            onChange(e.target.value);
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
});
