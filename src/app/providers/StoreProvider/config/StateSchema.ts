import { UserSchema } from 'enteties/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, Reducer, ReducersMapObject, EnhancedStore,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'pages/ProfilePage';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'enteties/Article';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { ArticleListSchema } from 'pages/ArticleListPage';
import { ScrollSchema } from 'widgets/Page';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';

export interface StateSchema {
    user: UserSchema,
    scroll: ScrollSchema,
    // async reducers
    loginForm?: LoginSchema,
    profile?: ProfileSchema,
    articleDetails?: ArticleDetailsSchema,
    articleDetailsPage?: ArticleDetailsPageSchema,
    addCommentForm?: AddCommentFormSchema,
    articleList?: ArticleListSchema,

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

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig {
    rejectValue: string,
    extra: ThunkExtraArg,
    state: StateSchema
}
