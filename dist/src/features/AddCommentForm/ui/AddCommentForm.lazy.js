import { lazy } from 'react';
export var AddCommentFormLazy = lazy(function () { return new Promise(function (resolve) {
    // @ts-ignore
    setTimeout(function () { return resolve(import('./AddCommentForm')); }, 500);
}); });
