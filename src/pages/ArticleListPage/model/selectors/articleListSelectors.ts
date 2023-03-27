import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleListLoading = (state: StateSchema) => state.articleList?.loading;
export const getArticleListView = (state: StateSchema) => state.articleList?.view;
export const getArticleListError = (state: StateSchema) => state.articleList?.error;
export const getArticleListLimit = (state: StateSchema) => state.articleList?.limit || 9;
export const getArticleListPage = (state: StateSchema) => state.articleList?.page || 1;
export const getArticleListHasMore = (state: StateSchema) => state.articleList?.hasMore;
export const getArticleListInit = (state: StateSchema) => state.articleList?._init;
