import { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager, StateKeys } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type reducerList = { [name in StateKeys]?: Reducer }
interface DynamicReducerProps {
    children: ReactNode,
    removeOnUnmount?: boolean,
    reducers: reducerList
}
export const DynamicReducerLoader = ({ children, reducers, removeOnUnmount = true }: DynamicReducerProps) => {
    const store = useStore() as ReduxStoreWithManager;
    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.dispatch({ type: `@INIT ${name} reducer` });
            store.reducerManager.add('loginForm', reducer);
        });

        return () => {
            if (removeOnUnmount) {
                Object.entries(reducers).forEach(([name, _]: [reducerName: StateKeys, reducer: Reducer]) => {
                    store.reducerManager.remove(name);
                    store.dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            { children }
        </>
    );
};
