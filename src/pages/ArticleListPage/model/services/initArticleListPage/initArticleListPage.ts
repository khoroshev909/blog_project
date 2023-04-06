import {
    createAsyncThunk,
} from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';
import { articleListActions } from '../../slices/articleListReducer';
import { getArticleListInit } from '../../selectors/articleListSelectors';

export const initArticleListPage = createAsyncThunk<void, URLSearchParams, ThunkConfig>(
    'articles/initArticleListPage',
    async (searchParams, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        try {
            const isInit = getArticleListInit(getState());
            if (!isInit) {
                searchParams.forEach((value, key) => {
                    const actionName = `set${key.charAt(0).toUpperCase() + key.slice(1)}`;
                    // @ts-ignore
                    const action = articleListActions[actionName];
                    dispatch(action(value));
                });
                dispatch(fetchArticleList({ replace: true }));
                dispatch(articleListActions.setInit());
            }
        } catch (e: any) {
            thunkAPI.rejectWithValue('error');
        }
    },
);
