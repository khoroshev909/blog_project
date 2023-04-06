import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../../model/types/article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig>(
    'article/fetchArticleById',
    async (id, thunkAPI) => {
        const { api } = thunkAPI.extra;
        try {
            const response = await api.get(`/articles/${id}`, {
                params: {
                    _expand: 'user',
                },
            });

            if (!response?.data) {
                throw Error();
            }

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Article Error');
        }
    },
);
