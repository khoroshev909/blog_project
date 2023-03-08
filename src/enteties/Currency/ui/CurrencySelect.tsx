import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { useCallback } from 'react';
import { CurrencyEnum } from '../model/types/currencyEnum';

interface CurrencySelectProps {
    className?: string,
    value?: string,
    onChange: (val: CurrencyEnum) => void,
    readonly?: boolean
}

const options = [
    { text: 'RUB', value: CurrencyEnum.RUB },
    { text: 'EUR', value: CurrencyEnum.EUR },
    { text: 'USD', value: CurrencyEnum.USD },
];
export const CurrencySelect = ({
    className, value, onChange, readonly,
}: CurrencySelectProps) => {
    const { t } = useTranslation();

    const changeHandler = useCallback((val: string) => {
        if (onChange) {
            onChange(val as CurrencyEnum);
        }
    }, [onChange]);

    return (
        <Select
            readonly={readonly}
            onChange={changeHandler}
            value={value}
            options={options}
            label={t('currency')}
        />
    );
};
