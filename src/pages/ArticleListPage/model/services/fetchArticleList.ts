import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from 'enteties/Article';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const fetchArticleList = createAsyncThunk<Article[], void, ThunkConfig>(
    'articles/fetchArticleList',
    async (_, thunkAPI) => {
        try {
            const { api } = thunkAPI.extra;

            const response = await api.get('/articles', {
                params: {
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw Error();
            }

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
