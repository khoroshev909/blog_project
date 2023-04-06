import { ArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendationsSchema';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema,
    recommendations: ArticleDetailsRecommendationsSchema
}
