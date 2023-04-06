import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useStore } from 'react-redux';
export var DynamicReducerLoader = function (_a) {
    var children = _a.children, reducers = _a.reducers, _b = _a.removeOnUnmount, removeOnUnmount = _b === void 0 ? false : _b;
    var store = useStore();
    useEffect(function () {
        var activeReducers = store.reducerManager.getReducerMap();
        Object.entries(reducers).forEach(function (_a) {
            var reducerName = _a[0], reducer = _a[1];
            if (!activeReducers[reducerName]) {
                store.dispatch({ type: "@INIT ".concat(reducerName, " reducer") });
                store.reducerManager.add(reducerName, reducer);
            }
        });
        return function () {
            if (removeOnUnmount) {
                Object.entries(reducers).forEach(function (_a) {
                    var name = _a[0], _ = _a[1];
                    store.reducerManager.remove(name);
                    store.dispatch({ type: "@DESTROY ".concat(name, " reducer") });
                });
            }
        };
        // eslint-disable-next-line
    }, []);
    return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    _jsx(_Fragment, { children: children }, void 0));
};
