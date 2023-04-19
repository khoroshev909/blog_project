import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { articleDetailsCanEdit } from '../../model/selectors/articleDetailsCanEdit';
import cls from './ArticleDetailsHeader.module.scss';

interface ArticleDetailsHeaderProps {
    className?: string
}

export const ArticleDetailsHeader = memo(({ className }: ArticleDetailsHeaderProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const canEdit = useSelector(articleDetailsCanEdit);
    const goBack = () => {
        navigate(String(routeConfig.article_list.path));
    };

    const onEdit = () => {
        navigate(routeConfig.article_edit.path!);
    };

    return (
        <div className={classNames(cls.ArticleDetailsHeader, {}, [className])}>
            <Button onClick={goBack}>
                {t('backToArticles')}
            </Button>
            {canEdit && (
                <Button onClick={onEdit}>
                    {t('edit')}
                </Button>
            )}
        </div>
    );
});
