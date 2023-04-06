import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
var AboutPage = memo(function () {
    var t = useTranslation('about').t;
    return (_jsx(Page, { children: t('aboutContent') }, void 0));
});
export default AboutPage;
