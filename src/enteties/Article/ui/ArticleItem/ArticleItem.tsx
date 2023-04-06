import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './ArticleItem.module.scss';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleItemProps {
    className?: string,
    article: Article,
    view?: ArticleView,
    target?: HTMLAttributeAnchorTarget,
}

export const ArticleItem = memo(({
    className, article, target, view = ArticleView.SMALL,
}: ArticleItemProps) => {
    const { t } = useTranslation();

    const types = (
        <Text className={cls.types} text={article.type.join(', ')} />
    );

    const views = (
        <div className={cls.views}>
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} />
        </div>
    );

    let textBlock;
    if (ArticleView.BIG) {
        textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
    }

    if (view === ArticleView.SMALL) {
        return (
            <AppLink to={`${routeConfig.article_list.path}/${article.id}`} target={target}>
                <div className={classNames(cls.ArticleItem, {}, [className, cls[view]])}>
                    <Card>
                        <div className={cls.imageWrapper}>
                            <img src={article.img} alt={article.title} />
                            <Text className={cls.date} text={article.createdAt} />
                        </div>
                        <div className={cls.infoWrapper}>
                            {types}
                            {views}
                        </div>
                        <Text className={cls.title} text={article.title} />
                    </Card>
                </div>
            </AppLink>
        );
    }
    return (
        <div className={classNames(cls.ArticleItem, {}, [className, cls[view]])}>
            <Card>
                <div className={cls.header}>
                    <div className={cls.author}>
                        <Avatar src={article.user.avatar || ''} size={30} />
                        <Text className={cls.username} text={article.user.username} />
                    </div>
                    <Text className={cls.createdAt} text={article.createdAt} />
                </div>
                <Text className={cls.title} title={article.title} />
                {types}
                <img src={article.img} alt={article.title} className={cls.image} />
                {textBlock && (
                    <ArticleTextBlockComponent
                        className={cls.text}
                        block={textBlock}
                    />
                )}
                <div className={cls.footer}>
                    <AppLink to={`${routeConfig.article_list.path}/${article.id}`}>
                        <Button>
                            {t('readMore')}
                        </Button>
                    </AppLink>
                    {views}
                </div>
            </Card>
        </div>
    );
});
