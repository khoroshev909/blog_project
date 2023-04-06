import { lazy } from 'react';

export const ArticleListPageLazy = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleListPage')), 500);
}));
