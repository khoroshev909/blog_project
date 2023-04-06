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
import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from 'app/routes/ui/RequreAuth';
export var AppRoutes = function () {
    var guardRoutes = useCallback(function (route) {
        var element = (_jsxs(Suspense, __assign({ fallback: _jsx(PageLoader, {}, void 0) }, { children: [route.element, ' '] }), void 0));
        return (_jsx(Route, { path: route.path, element: route.needAuth ? _jsx(RequireAuth, { children: element }, void 0) : element }, route.path));
    }, []);
    return (_jsx(Routes, { children: Object.values(routeConfig).map(guardRoutes) }, void 0));
};
