import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'enteties/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig>(
    'article/fetchCommentsByArticleId',
    async (articleId, thunkAPI) => {
        const { api } = thunkAPI.extra;
        try {
            if (!articleId) {
                return thunkAPI.rejectWithValue('error');
            }

            const response = await api.get('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
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
