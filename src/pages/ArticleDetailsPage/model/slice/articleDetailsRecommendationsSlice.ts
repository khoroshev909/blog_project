import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from 'enteties/Article';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    ArticleDetailsRecommendationsSchema,
} from '../types/ArticleDetailsRecommendationsSchema';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

export const articleDetailsRecommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations = articleDetailsRecommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations
        || articleDetailsRecommendationsAdapter.getInitialState(),
);

export const articleDetailsRecommendationsSlice = createSlice({
    name: 'articleDetailsRecommendationsSlice',
    initialState: articleDetailsRecommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
        loading: true,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.fulfilled, (state, action: PayloadAction<Article[]>) => {
                articleDetailsRecommendationsAdapter.setAll(state, action.payload);
                state.error = undefined;
                state.loading = false;
            })
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined;
                state.loading = true;
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export const { reducer: articleDetailsRecommendationsReducer } = articleDetailsRecommendationsSlice;
export const { actions: articleDetailsRecommendationsActions } = articleDetailsRecommendationsSlice;
