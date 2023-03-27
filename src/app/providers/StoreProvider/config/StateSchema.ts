import { UserSchema } from 'enteties/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, Reducer, ReducersMapObject, EnhancedStore,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'pages/ProfilePage';
import { AxiosInstance } from 'axios';
import { To } from 'history';
import { NavigateOptions } from 'react-router';
import { ArticleDetailsSchema } from 'enteties/Article/model/types/articleSchema';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage/model/types/ArticleDetailsCommentsSchema';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { ArticleListSchema } from 'pages/ArticleListPage';

export interface StateSchema {
    user: UserSchema,
    loginForm?: LoginSchema,
    profile?: ProfileSchema,
    articleDetails?: ArticleDetailsSchema,
    articleDetailsComments?: ArticleDetailsCommentsSchema,
    addCommentForm?: AddCommentFormSchema,
    articleList?: ArticleListSchema
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
