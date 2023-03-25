import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleView } from 'enteties/Article';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import useInitialEffect from 'shared/hooks/useInitialEffect';
import { DynamicReducerLoader, reducerList } from 'shared/lib/components/DynamycReducerLoader/DynamicReducerLoader';
import { useSelector } from 'react-redux';
import { EntetiesView } from 'features/EntetiesView';
import { useCallback } from 'react';
import {
    getArticleListLoading,
    getArticleListView,
    getArticleListError,
} from '../model/selectors/articleListSelectors';
import { fetchArticleList } from '../model/services/fetchArticleList';
import { articleListActions, articleListReducer, getArticleList } from '../model/slices/articleListReducer';

interface ArticleListPageProps {
    className?: string
}

const ArticleListPage = ({ className }: ArticleListPageProps) => {
    const dispatch = useAppDispatch();
    const view = useSelector(getArticleListView);
    const loading = useSelector(getArticleListLoading);
    const error = useSelector(getArticleListError);

    const articles = useSelector(getArticleList.selectAll);

    useInitialEffect(() => dispatch(fetchArticleList()));

    const reducers: reducerList = {
        articleList: articleListReducer,
    };

    const changeViewHandler = useCallback((view: ArticleView) => {
        dispatch(articleListActions.setView(view));
    }, [dispatch]);

    return (
        <DynamicReducerLoader reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                <EntetiesView
                    view={view!}
                    changeView={changeViewHandler}
                />
                <ArticleList
                    articles={articles}
                    loading={loading!}
                    view={view}
                />
            </div>
        </DynamicReducerLoader>
    );
};

export default ArticleListPage;
