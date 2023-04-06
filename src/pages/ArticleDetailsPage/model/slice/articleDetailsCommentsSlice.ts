import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from 'enteties/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../../model/types/ArticleDetailsCommentsSchema';

export const articleCommentAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = articleCommentAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.comments || articleCommentAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsComments',
    initialState: articleCommentAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        loading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {
        clearComments(state) {
            articleCommentAdapter.removeAll(state);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                articleCommentAdapter.setAll(state, action.payload);
                state.error = undefined;
                state.loading = false;
            })
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.loading = true;
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice;
