import { ThunkConfig } from 'app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { articleListActions } from '../../slices/articleListReducer';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';
import {
    getArticleListHasMore,
    getArticleListLoading,
    getArticleListPage,
} from '../../selectors/articleListSelectors';

export const fetchNextArticlePage = createAsyncThunk<undefined, void, ThunkConfig>(
    'articles/fetchNextArticlePage',
    // eslint-disable-next-line consistent-return
    async (_, thunkAPI) => {
        const { getState, rejectWithValue, dispatch } = thunkAPI;
        const state = getState();
        const page = getArticleListPage(state);
        const hasMore = getArticleListHasMore(state);
        const loading = getArticleListLoading(state);

        try {
            if (hasMore && !loading) {
                dispatch(articleListActions.setPage(page + 1));
                dispatch(fetchArticleList({ replace: false }));
            }
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
