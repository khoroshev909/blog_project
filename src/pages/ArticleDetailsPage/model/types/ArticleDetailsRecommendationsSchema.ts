import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'enteties/Article';

export interface ArticleDetailsRecommendationsSchema extends EntityState<Article>{
    loading?: boolean,
    error?: string | undefined
}
