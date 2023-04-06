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
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/state';
export function StoreProvider(_a) {
    var children = _a.children, initialState = _a.initialState, asyncReducers = _a.asyncReducers;
    var store = createReduxStore(initialState, asyncReducers);
    return (_jsx(Provider, __assign({ store: store }, { children: children }), void 0));
}
