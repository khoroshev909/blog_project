import { lazy } from 'react';
export var MainPageLazy = lazy(function () { return new Promise(function (resolve) {
    // @ts-ignore
    setTimeout(function () { return resolve(import('./MainPage')); }, 500);
}); });
