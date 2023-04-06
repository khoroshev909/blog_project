import { createSlice } from '@reduxjs/toolkit';
import { fetchArticleById } from '../services/fetchArticleById';
var initialState = {
    data: undefined,
    error: undefined,
    isLoading: true,
};
var articleDetailsSlice = createSlice({
    name: 'article',
    initialState: initialState,
    reducers: {
        clearArticleDetails: function (state) {
            state.data = undefined;
        },
    },
    extraReducers: function (builder) {
        builder
            .addCase(fetchArticleById.fulfilled, function (state, action) {
            state.data = action.payload;
            state.error = undefined;
            state.isLoading = false;
        })
            .addCase(fetchArticleById.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(fetchArticleById.rejected, function (state, action) {
            state.error = action.payload;
            state.isLoading = false;
        });
    },
});
export var articleDetailsReducer = articleDetailsSlice.reducer;
export var articleDetailsActions = articleDetailsSlice.actions;
