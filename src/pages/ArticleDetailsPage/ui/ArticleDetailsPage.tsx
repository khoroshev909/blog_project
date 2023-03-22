import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'enteties/Article';
import { Text } from 'shared/ui/Text/Text';
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { DynamicReducerLoader, reducerList } from 'shared/lib/components/DynamycReducerLoader/DynamicReducerLoader';
import { CommentList } from 'enteties/Comment';
import {
    getArticleCommentsLoading,
} from 'pages/ArticleDetailsPage/model/selectors/articleCommentsSelectors';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import useInitialEffect from 'shared/hooks/useInitialEffect';
import { AddCommentForm } from 'features/AddCommentForm';
import { useCallback } from 'react';
import {
    addCommentForArticle,
} from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: reducerList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const loading = useSelector(getArticleCommentsLoading);
    const dispatch = useAppDispatch();

    useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

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
            <div className={classNames('', {}, [className])}>
                <ArticleDetails id={id} />
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
        </DynamicReducerLoader>
    );
};

export default ArticleDetailsPage;
