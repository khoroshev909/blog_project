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
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
export var BugButton = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var _b = useState(false), error = _b[0], setError = _b[1];
    useEffect(function () {
        if (error) {
            throw new Error('Bug button test');
        }
    }, [error]);
    var throwError = function () { return setError(true); };
    return (_jsx(Button, __assign({ className: classNames('', {}, [className]), onClick: throwError }, { children: t('bugButton') }), void 0));
};
