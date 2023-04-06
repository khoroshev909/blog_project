import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { ArticleView } from 'enteties/Article';
import { ENTETIES_VIEW } from 'shared/config/const';
import { ArticleSortType } from '../types/articleListSchema';
import { fetchArticleList } from '../services/fetchArticleList/fetchArticleList';
export var articleListAdapter = createEntityAdapter({
    selectId: function (article) { return article.id; },
});
export var getArticleList = articleListAdapter.getSelectors(function (state) { return state.articleList || articleListAdapter.getInitialState(); });
var articlesView = localStorage.getItem(ENTETIES_VIEW);
var articleListSlice = createSlice({
    name: 'articleListSlice',
    initialState: articleListAdapter.getInitialState({
        loading: false,
        error: undefined,
        view: articlesView,
        limit: articlesView === ArticleView.SMALL ? 9 : 4,
        page: 1,
        hasMore: true,
        ids: [],
        entities: {},
        _init: false,
        order: 'asc',
        sort: ArticleSortType.CREATED_AT,
        search: '',
    }),
    reducers: {
        setView: function (state, action) {
            state.view = action.payload;
            localStorage.setItem(ENTETIES_VIEW, action.payload);
        },
        setLimit: function (state, action) {
            state.limit = action.payload === ArticleView.BIG ? 4 : 9;
        },
        setPage: function (state, action) {
            state.page = action.payload;
        },
        setInit: function (state) {
            state._init = true;
        },
        setSearch: function (state, action) {
            state.search = action.payload;
        },
        setOrder: function (state, action) {
            state.order = action.payload;
        },
        setSort: function (state, action) {
            state.sort = action.payload;
        },
    },
    extraReducers: function (builder) {
        builder
            .addCase(fetchArticleList.fulfilled, function (state, action) {
            state.error = undefined;
            state.loading = false;
            if (!action.payload.length) {
                state.hasMore = false;
            }
            if (action.meta.arg.replace) {
                articleListAdapter.setAll(state, action.payload);
            }
            else {
                articleListAdapter.addMany(state, action.payload);
            }
        })
            .addCase(fetchArticleList.pending, function (state, action) {
            state.error = undefined;
            state.loading = true;
            if (action.meta.arg.replace) {
                articleListAdapter.removeAll(state);
            }
        })
            .addCase(fetchArticleList.rejected, function (state, action) {
            state.error = action.payload;
            state.loading = false;
        });
    },
});
export var articleListReducer = articleListSlice.reducer;
export var articleListActions = articleListSlice.actions;
