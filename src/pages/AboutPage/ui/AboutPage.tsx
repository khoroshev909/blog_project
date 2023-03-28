import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

const AboutPage:FC = memo(() => {
    const { t } = useTranslation('about');
    return (
        <Page>
            {t('aboutContent')}
        </Page>

    );
});

export default AboutPage;
