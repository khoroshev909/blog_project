import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListPage.module.scss';

interface ArticleListPageProps {
    className?: string
}
const ArticleListPage = ({ className }: ArticleListPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleListPage, {}, [className])}>
            {t('articleList')}
        </div>
    );
};

export default ArticleListPage;
