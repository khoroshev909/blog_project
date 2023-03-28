import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

const MainPage:FC = memo(() => {
    const { t } = useTranslation('main');
    return (
        <Page>
            {t('mainContent')}
        </Page>
    );
});

export default MainPage;
