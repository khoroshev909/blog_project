import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
var MainPage = memo(function () {
    var t = useTranslation('main').t;
    return (_jsx(Page, { children: t('mainContent') }, void 0));
});
export default MainPage;
