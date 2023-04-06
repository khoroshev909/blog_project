import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchCommentsByArticleId, } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
export var articleCommentAdapter = createEntityAdapter({
    selectId: function (comment) { return comment.id; },
});
export var getArticleComments = articleCommentAdapter.getSelectors(function (state) { return state.articleDetailsComments || articleCommentAdapter.getInitialState(); });
var articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsComments',
    initialState: articleCommentAdapter.getInitialState({
        loading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {
        clearComments: function (state) {
            articleCommentAdapter.removeAll(state);
        },
    },
    extraReducers: function (builder) {
        builder
            .addCase(fetchCommentsByArticleId.fulfilled, function (state, action) {
            articleCommentAdapter.setAll(state, action.payload);
            state.error = undefined;
            state.loading = false;
        })
            .addCase(fetchCommentsByArticleId.pending, function (state) {
            state.error = undefined;
            state.loading = true;
        })
            .addCase(fetchCommentsByArticleId.rejected, function (state, action) {
            state.error = action.payload;
            state.loading = false;
        });
    },
});
export var articleDetailsCommentsReducer = articleDetailsCommentsSlice.reducer;
export var articleDetailsCommentsActions = articleDetailsCommentsSlice.actions;
