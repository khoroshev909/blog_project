import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Countries } from '../model/types/country';
var options = [
    { text: Countries.RUS, value: Countries.RUS },
    { text: Countries.USA, value: Countries.USA },
    { text: Countries.UK, value: Countries.UK },
];
export var CountrySelect = memo(function (_a) {
    var value = _a.value, onChange = _a.onChange, readonly = _a.readonly;
    var t = useTranslation().t;
    var changeHandler = useCallback(function (val) {
        if (onChange) {
            onChange(val);
        }
    }, [onChange]);
    return (_jsx(Select, { readonly: readonly, onChange: changeHandler, value: value, options: options, label: t('country') }, void 0));
});
