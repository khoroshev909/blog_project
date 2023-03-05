import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername';
import { reducerList } from 'shared/lib/components/DynamycReducerLoader/DynamicReducerLoader';

const defaultAsyncReducers: reducerList = {
    loginForm: loginReducer,
};
export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: reducerList,
) => (Story: Story) => (
    <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <Story />
    </StoreProvider>
);
