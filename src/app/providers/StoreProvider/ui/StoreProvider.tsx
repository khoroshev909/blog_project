import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { createReduxStore } from '../config/state';

interface StoreProviderProps {
    children: ReactNode,
    initialState?: DeepPartial<StateSchema>
}
export function StoreProvider({ children, initialState }: StoreProviderProps) {
    const store = createReduxStore(initialState as StateSchema);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}
