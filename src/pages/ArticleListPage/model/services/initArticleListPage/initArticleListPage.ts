import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';
import { articleListActions } from '../../slices/articleListReducer';
import { getArticleListInit } from '../../selectors/articleListSelectors';

export const initArticleListPage = createAsyncThunk<void, void, ThunkConfig>(
    'articles/initArticleListPage',
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        try {
            const isInit = getArticleListInit(getState());
            if (!isInit) {
                dispatch(fetchArticleList({ page: 1 }));
                dispatch(articleListActions.setInit());
            }
        } catch (e: any) {
            thunkAPI.rejectWithValue('error');
        }
    },
);
