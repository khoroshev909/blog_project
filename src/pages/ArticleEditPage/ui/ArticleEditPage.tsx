import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useParams } from 'react-router-dom';
import { memo } from 'react';

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    return (
        <div className={classNames('', {}, [className])}>
            {id ? (
                t('edit')
            ) : (
                t('create')
            )}
        </div>
    );
};

export default memo(ArticleEditPage);
