import { lazy } from 'react';
export var ArticleListPageLazy = lazy(function () { return new Promise(function (resolve) {
    // @ts-ignore
    setTimeout(function () { return resolve(import('./ArticleListPage')); }, 500);
}); });
