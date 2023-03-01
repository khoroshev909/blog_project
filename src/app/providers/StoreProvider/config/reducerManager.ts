import {
    ReducersMapObject, combineReducers, AnyAction, Reducer,
} from '@reduxjs/toolkit';
import { StateSchema, StateKeys } from './StateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>) {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: StateKeys[] = [];

    return {
        getReducerMap: () => reducers,
        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state[key];
                });
                keysToRemove = [];
            }
            return combinedReducer(state, action);
        },
        add: (key: StateKeys, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers);
        },
        remove: (key: StateKeys) => {
            if (!key || !reducers[key]) {
                return;
            }

            delete reducers[key];

            keysToRemove.push(key);

            combinedReducer = combineReducers(reducers);
        },
    };
}
