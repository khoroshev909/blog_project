import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleListLoading = (state: StateSchema) => state.articleList?.loading;
export const getArticleListView = (state: StateSchema) => state.articleList?.view;
export const getArticleListError = (state: StateSchema) => state.articleList?.error;
