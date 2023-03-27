import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleView } from 'enteties/Article';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import useInitialEffect from 'shared/hooks/useInitialEffect';
import { DynamicReducerLoader, reducerList } from 'shared/lib/components/DynamycReducerLoader/DynamicReducerLoader';
import { useSelector } from 'react-redux';
import { EntetiesView } from 'features/EntetiesView';
import { useCallback } from 'react';
import { Page } from 'shared/ui/Page/Page';
import { Error } from 'shared/ui/Error/Error';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { fetchNextArticlePage } from '../model/services/fetchNextArticlePage/fetchNextArticlePage';
import {
    getArticleListError,
    getArticleListLoading,
    getArticleListView,
} from '../model/selectors/articleListSelectors';
import { articleListActions, articleListReducer, getArticleList } from '../model/slices/articleListReducer';
import { initArticleListPage } from '../model/services/initArticleListPage/initArticleListPage';

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

    useInitialEffect(() => {
        dispatch(initArticleListPage());
    });

    const onAddNewPage = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    const changeViewHandler = useCallback((view: ArticleView) => {
        dispatch(articleListActions.setLimit(view));
        dispatch(articleListActions.setView(view));
    }, [dispatch]);

    if (error) {
        return <Error />;
    }

    return (
        <DynamicReducerLoader reducers={reducers}>
            <Page
                onScrollEnd={onAddNewPage}
                className={classNames('', {}, [className])}
            >
                {!loading && !articles.length && (
                    <Text title={t('noArticles')} />
                )}
                <EntetiesView
                    view={view!}
                    changeView={changeViewHandler}
                />
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
