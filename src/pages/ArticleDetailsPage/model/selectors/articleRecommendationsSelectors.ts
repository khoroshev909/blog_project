import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationsError = (state: StateSchema) => {
    return state.articleDetailsPage?.recommendations.error;
};

export const getArticleRecommendationsLoading = (state: StateSchema) => {
    return state.articleDetailsPage?.recommendations.loading ?? true;
};
