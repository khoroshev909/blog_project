import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails, ArticleList } from 'enteties/Article';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { DynamicReducerLoader, reducerList } from 'shared/lib/components/DynamycReducerLoader/DynamicReducerLoader';
import { CommentList } from 'enteties/Comment';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import useInitialEffect from 'shared/hooks/useInitialEffect';
import { AddCommentForm } from 'features/AddCommentForm';
import { useCallback, useEffect, memo } from 'react';
import { Page } from 'widgets/Page';
import { articleDetailsActions } from 'enteties/Article/model/slice/articleDetailsSlice';
import { articleDetailsPageReducers } from '../model/slice';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleCommentsLoading } from '../model/selectors/articleCommentsSelectors';
import { articleDetailsCommentsActions, getArticleComments } from '../model/slice/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { fetchArticleRecommendations } from '../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { getArticleRecommendations } from '../model/slice/articleDetailsRecommendationsSlice';
import { getArticleRecommendationsLoading } from '../model/selectors/articleRecommendationsSelectors';
import { ArticleDetailsHeader } from './ArticleDetailsHeader/ArticleDetailsHeader';

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: reducerList = {
    articleDetailsPage: articleDetailsPageReducers,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const loading = useSelector(getArticleCommentsLoading);
    const dispatch = useAppDispatch();
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsLoading = useSelector(getArticleRecommendationsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    useEffect(() => () => {
        dispatch(articleDetailsActions.clearArticleDetails());
        dispatch(articleDetailsCommentsActions.clearComments());
    }, [dispatch]);

    const onAddComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    if (!id) {
        return (
            <Text title={t('articleNotFound')} />
        );
    }

    return (
        <DynamicReducerLoader reducers={reducers}>
            <Page>
                <div className={classNames('', {}, [className])}>
                    <ArticleDetailsHeader />
                    <ArticleDetails id={id} />
                    <Text title={t('recommendations')} />
                    <ArticleList
                        articles={recommendations}
                        loading={recommendationsLoading}
                        target="_blank"
                        className={cls.recommendations}
                    />
                    <Text
                        className={cls.comments}
                        title={t('comments')}
                    />
                    <AddCommentForm
                        className={cls.commentForm}
                        onAddComment={onAddComment}
                    />
                    <CommentList
                        comments={comments}
                        loading={loading!}
                    />
                </div>
            </Page>
        </DynamicReducerLoader>
    );
};

export default memo(ArticleDetailsPage);
