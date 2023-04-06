import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo } from 'react';
import { OrderType } from 'shared/types/orderType';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import cls from './ArticleSort.module.scss';
import { ArticleSortType } from '../../model/types/articleListSchema';

interface ArticleSortProps {
    className?: string,
    sort: ArticleSortType,
    order: OrderType,
    onChangeSort: (newSort: ArticleSortType) => void,
    onChangeOrder: (newOrder: OrderType) => void
}

export const ArticleSort = memo((props: ArticleSortProps) => {
    const {
        className, sort, order, onChangeSort, onChangeOrder,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<OrderType>[]>(() => [
        {
            value: 'asc',
            text: t('asc'),
        },
        {
            value: 'desc',
            text: t('desc'),
        },
    ], [t]);

    const sortOptions = useMemo<SelectOption<ArticleSortType>[]>(() => [
        {
            value: ArticleSortType.CREATED_AT,
            text: t('byDate'),
        },
        {
            value: ArticleSortType.VIEWS,
            text: t('byViews'),
        },
        {
            value: ArticleSortType.TITLE,
            text: t('byTitle'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.ArticleSort, {}, [className])}>
            <Select<ArticleSortType>
                label={t('sortBy')}
                options={sortOptions}
                value={sort}
                onChange={onChangeSort}
            />
            <Select<OrderType>
                label={t('sortOrder')}
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
});
