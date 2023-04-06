import { Comment } from 'enteties/Comment';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment>{
    loading?: boolean,
    error?: string | undefined
}
