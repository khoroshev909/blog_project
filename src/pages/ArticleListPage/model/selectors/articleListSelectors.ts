import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortType } from 'pages/ArticleListPage/model/types/articleListSchema';
import { ArticleTypes } from 'enteties/Article';

export const getArticleListLoading = (state: StateSchema) => state.articleList?.loading;
export const getArticleListView = (state: StateSchema) => state.articleList?.view;
export const getArticleListError = (state: StateSchema) => state.articleList?.error;
export const getArticleListLimit = (state: StateSchema) => state.articleList?.limit ?? 9;
export const getArticleListPage = (state: StateSchema) => state.articleList?.page ?? 1;
export const getArticleListHasMore = (state: StateSchema) => state.articleList?.hasMore;
export const getArticleListInit = (state: StateSchema) => state.articleList?._init;
export const getArticleSortOrder = (state: StateSchema) => state.articleList?.order ?? 'asc';
export const getArticleSort = (state: StateSchema) => state.articleList?.sort ?? ArticleSortType.CREATED_AT;
export const getArticleSearch = (state: StateSchema) => state.articleList?.search ?? '';
export const getArticleType = (state: StateSchema) => state.articleList?.type ?? ArticleTypes.ALL;
