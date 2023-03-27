import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicReducerLoader, reducerList } from 'shared/lib/components/DynamycReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'enteties/Article/model/selectors/getArticleDetailsData';
import { getArticleDetailsError } from 'enteties/Article/model/selectors/getArticleDetailsError';
import { getArticleDetailsLoading } from 'enteties/Article/model/selectors/getArticleDetailsLoading';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import useInitialEffect from 'shared/hooks/useInitialEffect';
import { Error } from 'shared/ui/Error/Error';
import { ArticleCodeBlockComponent } from '../../ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../../ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import { ArticleBlock } from '../../model/types/article';

interface ArticleDetailsProps {
    className?: string,
    id: string
}

const reducers: reducerList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const dispatch = useAppDispatch();
    const data = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    const loading = useSelector(getArticleDetailsLoading);
    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case 'TEXT':
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    block={block}
                />
            );
        case 'CODE':
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                />
            );
        case 'IMAGE':
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                />
            );
        default:
            return null;
        }
    }, []);

    let content;

    if (loading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    }

    if (error) {
        content = <Error />;
    }

    if (data) {
        content = (
            <div className={classNames('', {}, [className])}>
                <div className={cls.AvatarWrapper}>
                    <Avatar src={data.img} size={200} />
                </div>
                <Text
                    title={data.title}
                    text={data.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.viewsWrapper}>
                    <Icon Svg={EyeIcon} />
                    <span>{data.views}</span>
                </div>

                <div className={cls.calendarWrapper}>
                    <Icon Svg={CalendarIcon} />
                    <span>{data.createdAt}</span>
                </div>
                {data.blocks.map(renderBlock)}
            </div>
        );
    }

    return (
        <DynamicReducerLoader reducers={reducers}>
            {content}
        </DynamicReducerLoader>
    );
});
