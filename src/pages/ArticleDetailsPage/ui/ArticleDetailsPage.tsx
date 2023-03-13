import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            {t('articleDetails')}
        </div>
    );
};

export default ArticleDetailsPage;
