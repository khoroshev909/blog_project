var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CurrencySelect } from 'enteties/Currency';
import { useCallback } from 'react';
import { CountrySelect } from 'enteties/Country';
import cls from './ProfileCard.module.scss';
export var ProfileCard = function (props) {
    var data = props.data, error = props.error, className = props.className, loading = props.loading, onChangeFirstName = props.onChangeFirstName, onChangeLastName = props.onChangeLastName, onChangeAge = props.onChangeAge, onChangeCountry = props.onChangeCountry, onChangeUsername = props.onChangeUsername, onChangeAvatar = props.onChangeAvatar, onCurrencyChange = props.onCurrencyChange, readonly = props.readonly;
    var t = useTranslation().t;
    var currencyChangeHandler = useCallback(function (val) {
        if (onCurrencyChange) {
            onCurrencyChange(val);
        }
    }, [onCurrencyChange]);
    var changeCountryHandler = useCallback(function (val) {
        if (onChangeCountry) {
            onChangeCountry(val);
        }
    }, [onChangeCountry]);
    var changeAgeHandler = useCallback(function (val) {
        if (!Number.isNaN(+val) && +val >= 0 && onChangeAge) {
            onChangeAge(val);
        }
    }, [onChangeAge]);
    if (error) {
        return (_jsx("div", __assign({ className: classNames('', {}, [className, cls.error]) }, { children: _jsx(Text, { title: t('Oops... Sometning went wrong'), text: t('Try to reload the page'), theme: TextTheme.ERROR, align: TextAlign.CENTER }, void 0) }), void 0));
    }
    if (loading) {
        return (_jsx("div", __assign({ className: classNames('', {}, [className, cls.loading]) }, { children: _jsx(Loader, {}, void 0) }), void 0));
    }
    return (_jsx("div", __assign({ className: classNames(cls.ProfileCard, {}, [className]) }, { children: _jsxs("div", __assign({ className: cls.data }, { children: [(data === null || data === void 0 ? void 0 : data.avatar) && (_jsx(Avatar, { src: data.avatar, size: 150 }, void 0)), _jsx(CurrencySelect, { readonly: readonly, value: data === null || data === void 0 ? void 0 : data.currency, onChange: currencyChangeHandler }, void 0), _jsx(CountrySelect, { readonly: readonly, value: data === null || data === void 0 ? void 0 : data.country, onChange: changeCountryHandler }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.username, placeholder: t('username'), className: cls.input, onChange: onChangeUsername, readOnly: readonly }, void 0), _jsx(Input, { value: String(data === null || data === void 0 ? void 0 : data.age), placeholder: t('age'), className: cls.input, onChange: changeAgeHandler, readOnly: readonly }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.first, placeholder: t('firstName'), className: cls.input, onChange: onChangeFirstName, readOnly: readonly }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.lastname, placeholder: t('lastName'), className: cls.input, onChange: onChangeLastName, readOnly: readonly }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.avatar, placeholder: t('avatar'), className: cls.input, onChange: onChangeAvatar, readOnly: readonly }, void 0)] }), void 0) }), void 0));
};
