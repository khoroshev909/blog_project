import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { memo } from 'react';
import cls from './ArticleSkeleton.module.scss';
import { ArticleView } from '../../model/types/article';

interface ArticleSkeletonProps {
    className?: string,
    view: ArticleView
}

export const ArticleSkeleton = memo(({ className, view }: ArticleSkeletonProps) => (
    <div className={classNames('', {}, [className, cls[view]])}>
        {view === ArticleView.SMALL ? (
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} height={200} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={120} height={30} />
                </div>
                <Skeleton width={180} height={30} />
            </Card>
        ) : (
            <Card className={cls.card}>
                <div className={cls.header}>
                    <div className={cls.author}>
                        <Skeleton width={30} height={30} border="50%" />
                        <Skeleton className={cls.username} width={100} height={20} />
                    </div>
                </div>
                <Skeleton className={cls.title} width={180} height={30} />
                <Skeleton className={cls.image} width="100%" height={200} />
                <Skeleton width="100%" height={150} />
                <div className={cls.footer}>
                    <Skeleton width={120} height={30} />
                </div>
            </Card>
        )}
    </div>
));
