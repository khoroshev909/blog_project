import { lazy } from 'react';
export var ProfilePageLazy = lazy(function () { return new Promise(function (resolve) {
    // @ts-ignore
    setTimeout(function () { return resolve(import('./ProfilePage')); }, 500);
}); });
