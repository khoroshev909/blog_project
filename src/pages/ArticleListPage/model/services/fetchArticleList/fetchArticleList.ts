import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article, ArticleTypes } from 'enteties/Article';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { addQueryParams } from 'shared/lib/addQueryParams/addQueryParams';
import {
    getArticleListLimit,
    getArticleListPage,
    getArticleSearch,
    getArticleSort,
    getArticleSortOrder,
    getArticleType,
} from '../../selectors/articleListSelectors';

interface fetchArticleListProps {
    replace: boolean
}

export const fetchArticleList = createAsyncThunk<Article[], fetchArticleListProps, ThunkConfig>(
    'articles/fetchArticleList',
    async ({ replace }, thunkAPI) => {
        const { getState, rejectWithValue } = thunkAPI;
        const { api } = thunkAPI.extra;
        const state = getState();
        const limit = getArticleListLimit(state);
        const sort = getArticleSort(state);
        const order = getArticleSortOrder(state);
        const search = getArticleSearch(state);
        const page = getArticleListPage(state);
        const type = getArticleType(state);

        try {
            addQueryParams({
                sort, order, search,
            });
            const response = await api.get('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === ArticleTypes.ALL ? undefined : type,
                },
            });

            if (!response.data) {
                throw Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
