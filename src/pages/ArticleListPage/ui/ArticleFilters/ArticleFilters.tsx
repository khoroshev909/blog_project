import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { EntetiesView } from 'features/EntetiesView';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { ArticleTypes, ArticleView } from 'enteties/Article';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { Input } from 'shared/ui/Input/Input';
import { OrderType } from 'shared/types/orderType';
import { ArticleSortType } from 'pages/ArticleListPage/model/types/articleListSchema';
import { fetchArticleList } from 'pages/ArticleListPage/model/services/fetchArticleList/fetchArticleList';
import { Card } from 'shared/ui/Card/Card';
import useDebounce from 'shared/hooks/useDebounce';
import { ArticleSort } from '../ArticleSort/ArticleSort';
import {
    getArticleListView,
    getArticleSearch,
    getArticleSort,
    getArticleSortOrder, getArticleType,
} from '../../model/selectors/articleListSelectors';
import { articleListActions } from '../../model/slices/articleListReducer';
import cls from './ArticleFilters.module.scss';
import { ArticleTabs } from '../ArticleTabs/ArticleTabs';

interface ArticleFiltersProps {
    className?: string
}

export const ArticleFilters = memo(({ className }: ArticleFiltersProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const view = useSelector(getArticleListView);
    const sort = useSelector(getArticleSort);
    const order = useSelector(getArticleSortOrder);
    const search = useSelector(getArticleSearch);
    const type = useSelector(getArticleType);

    const changeViewHandler = useCallback((view: ArticleView) => {
        dispatch(articleListActions.setLimit(view));
        dispatch(articleListActions.setView(view));
    }, [dispatch]);

    const onChangeOrder = useCallback((newOrder: OrderType) => {
        dispatch(articleListActions.setPage(1));
        dispatch(articleListActions.setOrder(newOrder));
        dispatch(fetchArticleList({ replace: true }));
    }, [dispatch]);

    const onChangeSort = useCallback((newSort: ArticleSortType) => {
        dispatch(articleListActions.setPage(1));
        dispatch(articleListActions.setSort(newSort));
        dispatch(fetchArticleList({ replace: true }));
    }, [dispatch]);

    const fetchDebouncedData = useDebounce(() => {
        dispatch(fetchArticleList({ replace: true }));
    }, 300);

    const onSearch = useCallback((val: string) => {
        dispatch(articleListActions.setSearch(val));
        if (val.length > 2) {
            dispatch(articleListActions.setPage(1));
            fetchDebouncedData();
        }
    }, [dispatch, fetchDebouncedData]);

    const onChangeTab = useCallback((val: ArticleTypes) => {
        dispatch(articleListActions.setPage(1));
        dispatch(articleListActions.setType(val));
        dispatch(fetchArticleList({ replace: true }));
    }, [dispatch]);

    return (
        <div className={classNames(cls.ArticleFilters, {}, [className])}>
            <ArticleTabs
                value={type}
                onChangeTab={onChangeTab}
            />
            <div className={cls.sort}>
                <ArticleSort
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <EntetiesView
                    view={view!}
                    changeView={changeViewHandler}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    onChange={onSearch}
                    value={search}
                    placeholder={t('search')}
                />
            </Card>
        </div>
    );
});
