import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'enteties/Comment';
import { getUserAuthData } from 'enteties/User';
import { getArticleDetailsData } from 'enteties/Article/model/selectors/getArticleDetailsData';
import {
    fetchCommentsByArticleId,
} from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig>(
    'articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {
        const { api } = thunkAPI.extra;
        const { getState, dispatch } = thunkAPI;
        const state = getState();

        const userId = getUserAuthData(state)?.id;
        const articleId = getArticleDetailsData(state)?.id;

        if (!articleId) {
            throw Error();
        }

        try {
            const response = await api.post<Comment>('/comments', {
                articleId,
                userId,
                text,
            });

            if (!response?.data) {
                throw Error();
            }

            dispatch(fetchCommentsByArticleId(articleId));

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
