import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleListPageProps {
    className?: string
}
const ArticleListPage = ({ className }: ArticleListPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames('', {}, [className])}>
            {t('articleList')}
        </div>
    );
};

export default ArticleListPage;
