import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsError = (state: StateSchema) => {
    return state.articleDetailsPage?.comments.error;
};

export const getArticleCommentsLoading = (state: StateSchema) => {
    return state.articleDetailsPage?.comments.loading;
};
