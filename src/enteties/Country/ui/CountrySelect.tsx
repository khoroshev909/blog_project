import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Countries } from '../model/types/country';

interface CurrencySelectProps {
    value?: string,
    onChange: (val: Countries) => void,
    readonly?: boolean
}

const options = [
    { text: Countries.RUS, value: Countries.RUS },
    { text: Countries.USA, value: Countries.USA },
    { text: Countries.UK, value: Countries.UK },
];
export const CountrySelect = memo(({
    value, onChange, readonly,
}: CurrencySelectProps) => {
    const { t } = useTranslation();

    const changeHandler = useCallback((val: string) => {
        if (onChange) {
            onChange(val as Countries);
        }
    }, [onChange]);

    return (
        <Select
            readonly={readonly}
            onChange={changeHandler}
            value={value}
            options={options}
            label={t('country')}
        />
    );
});
