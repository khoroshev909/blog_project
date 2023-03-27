import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from 'enteties/Article';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleListLimit } from '../../selectors/articleListSelectors';

interface fetchArticleListProps {
    page: number
}

export const fetchArticleList = createAsyncThunk<Article[], fetchArticleListProps, ThunkConfig>(
    'articles/fetchArticleList',
    async (props, thunkAPI) => {
        const { getState, rejectWithValue } = thunkAPI;
        const { api } = thunkAPI.extra;
        const { page = 1 } = props;
        const state = getState();
        const limit = getArticleListLimit(state);
        try {
            const response = await api.get('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                },
            });

            if (!response.data) {
                throw Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
