import { lazy } from 'react';
export var ArticleDetailsPageLazy = lazy(function () { return new Promise(function (resolve) {
    // @ts-ignore
    setTimeout(function () { return resolve(import('./ArticleDetailsPage')); }, 500);
}); });
