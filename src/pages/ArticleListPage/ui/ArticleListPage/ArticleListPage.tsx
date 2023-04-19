import { classNames } from 'shared/lib/classNames/classNames';
import { useSearchParams } from 'react-router-dom';
import { ArticleList } from 'enteties/Article';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import useInitialEffect from 'shared/hooks/useInitialEffect';
import { DynamicReducerLoader, reducerList } from 'shared/lib/components/DynamycReducerLoader/DynamicReducerLoader';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { Page } from 'widgets/Page';
import { Error } from 'shared/ui/Error/Error';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ArticleFilters } from '../ArticleFilters/ArticleFilters';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import {
    getArticleListError,
    getArticleListLoading,
    getArticleListView,
} from '../../model/selectors/articleListSelectors';
import { articleListReducer, getArticleList } from '../../model/slices/articleListReducer';
import { initArticleListPage } from '../../model/services/initArticleListPage/initArticleListPage';

interface ArticleListPageProps {
    className?: string
}

const reducers: reducerList = {
    articleList: articleListReducer,
};

const ArticleListPage = ({ className }: ArticleListPageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const view = useSelector(getArticleListView);
    const loading = useSelector(getArticleListLoading);
    const articles = useSelector(getArticleList.selectAll);
    const error = useSelector(getArticleListError);
    const [searchParams, _] = useSearchParams();
    useInitialEffect(() => {
        dispatch(initArticleListPage(searchParams));
    });

    const onAddNewPage = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    if (error) {
        return <Error />;
    }

    return (
        <DynamicReducerLoader reducers={reducers}>
            {!loading && !articles.length && (
                <Text title={t('noArticles')} />
            )}
            <Page
                listenScroll
                onScrollEnd={onAddNewPage}
                className={classNames('', {}, [className])}
            >
                <ArticleFilters />
                <ArticleList
                    articles={articles}
                    loading={loading!}
                    view={view}
                />
            </Page>
        </DynamicReducerLoader>
    );
};

export default ArticleListPage;
