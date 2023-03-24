import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
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
                new Array(16).fill(0).map((_, idx) => (
                    { ...articles[0], id: String(idx) }
                )).map(renderArticle)
            ) : null}
        </div>
    );
});
