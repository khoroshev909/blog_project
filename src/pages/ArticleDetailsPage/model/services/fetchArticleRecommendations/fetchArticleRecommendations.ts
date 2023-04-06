import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'enteties/Article';

export const fetchArticleRecommendations = createAsyncThunk<Article[], void, ThunkConfig>(
    'recommendations/fetchArticleRecommendations',
    async (_, thunkAPI) => {
        const { api } = thunkAPI.extra;
        try {
            const response = await api.get('/articles', {
                params: {
                    _limit: 4,
                },
            });

            if (!response?.data) {
                throw Error();
            }

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
