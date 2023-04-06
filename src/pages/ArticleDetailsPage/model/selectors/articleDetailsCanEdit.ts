import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'enteties/User';
import { getArticleDetailsData } from 'enteties/Article';

export const articleDetailsCanEdit = createSelector(
    getUserAuthData,
    getArticleDetailsData,
    (user, article) => {
        if (!user || !article) {
            return false;
        }

        return user.id === article.user.id;
    },
);
