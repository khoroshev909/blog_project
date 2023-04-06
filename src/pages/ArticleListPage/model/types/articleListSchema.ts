import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleTypes, ArticleView } from 'enteties/Article';
import { OrderType } from 'shared/types/orderType';

export enum ArticleSortType {
    TITLE = 'title',
    CREATED_AT = 'createdAt',
    VIEWS = 'views'
}

export interface ArticleListSchema extends EntityState<Article> {
    loading: boolean,
    error: string | undefined,
    view: ArticleView,
    limit: number,
    page: number,
    hasMore: boolean,
    _init: boolean,
    order: OrderType,
    sort: ArticleSortType,
    search: string,
    type: ArticleTypes
}
