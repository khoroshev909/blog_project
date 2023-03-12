import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername';
import { reducerList } from 'shared/lib/components/DynamycReducerLoader/DynamicReducerLoader';
import { profileReducer } from 'pages/ProfilePage/model/slice/profileSlice';

const defaultAsyncReducers: reducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
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
