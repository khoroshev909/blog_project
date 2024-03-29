import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername';
import { reducerList } from 'shared/lib/components/DynamycReducerLoader/DynamicReducerLoader';
import { profileReducer } from 'pages/ProfilePage/model/slice/profileSlice';
import { articleDetailsReducer } from 'enteties/Article/model/slice/articleDetailsSlice';
import { articleDetailsPageReducers } from 'pages/ArticleDetailsPage/model/slice';

const defaultAsyncReducers: reducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsPage: articleDetailsPageReducers,
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
