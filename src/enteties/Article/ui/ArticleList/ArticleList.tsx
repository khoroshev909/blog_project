import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ArticleSkeleton } from '../ArticleSkeleton/ArticleSkeleton';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListProps {
    className?: string,
    articles: Article[],
    loading: boolean,
    view?: ArticleView
}

const renderSkeletons = (view: ArticleView) => (
    <div className={classNames(cls.ArticleList, {}, ['', cls[view]])}>
        {new Array(view === ArticleView.BIG ? 3 : 16)
            .fill('')
            .map((_, idx) => (
                <ArticleSkeleton key={idx} view={view} />
            ))}
    </div>
);

export const ArticleList = memo(({
    className, articles, loading, view = ArticleView.SMALL,
}: ArticleListProps) => {
    const { t } = useTranslation();
    if (loading) {
        return renderSkeletons(view);
    }

    const renderArticle = (article: Article) => (
        <ArticleItem
            key={article.id}
            className={cls.ArticleItem}
            article={article}
            view={view}
        />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length ? (
                articles.map(renderArticle)
            ) : (
                <Text title={t('noArticles')} />
            )}
        </div>
    );
});
