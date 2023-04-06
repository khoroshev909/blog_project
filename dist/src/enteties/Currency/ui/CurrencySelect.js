import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { useCallback } from 'react';
import { CurrencyEnum } from '../model/types/currencyEnum';
var options = [
    { text: 'RUB', value: CurrencyEnum.RUB },
    { text: 'EUR', value: CurrencyEnum.EUR },
    { text: 'USD', value: CurrencyEnum.USD },
];
export var CurrencySelect = function (_a) {
    var className = _a.className, value = _a.value, onChange = _a.onChange, readonly = _a.readonly;
    var t = useTranslation().t;
    var changeHandler = useCallback(function (val) {
        if (onChange) {
            onChange(val);
        }
    }, [onChange]);
    return (_jsx(Select, { readonly: readonly, onChange: changeHandler, value: value, options: options, label: t('currency') }, void 0));
};
