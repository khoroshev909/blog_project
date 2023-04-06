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
import { configureStore, } from '@reduxjs/toolkit';
import { userReducer } from 'enteties/User';
import { $api } from 'shared/config/api/api';
import { scrollReducer } from 'widgets/Page';
import { createReducerManager } from './reducerManager';
export function createReduxStore(initialState, asyncReducers) {
    var rootReducer = __assign(__assign({}, asyncReducers), { user: userReducer, scroll: scrollReducer });
    var reducerManager = createReducerManager(rootReducer);
    var extraArg = {
        api: $api,
    };
    var store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: function (getDefaultMiddleware) { return getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }); },
    });
    // @ts-ignore
    store.reducerManager = reducerManager;
    return store;
}
