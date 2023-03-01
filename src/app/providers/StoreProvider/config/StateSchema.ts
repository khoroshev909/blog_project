import { CounterSchema } from 'enteties/Counter';
import { UserSchema } from 'enteties/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, Reducer, ReducersMapObject, EnhancedStore,
} from '@reduxjs/toolkit';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    loginForm?: LoginSchema
}

export type StateKeys = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
    add: (key: StateKeys, reducer: Reducer) => void,
    remove: (key: StateKeys) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}
