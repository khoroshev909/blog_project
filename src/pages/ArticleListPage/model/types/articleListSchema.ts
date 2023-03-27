import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'enteties/Article';

export interface ArticleListSchema extends EntityState<Article> {
    loading: boolean,
    error: string | undefined,
    view: ArticleView,
    limit: number,
    page: number,
    hasMore: boolean,
    _init: boolean,
}
