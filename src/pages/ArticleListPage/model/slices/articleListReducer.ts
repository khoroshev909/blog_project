import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleTypes, ArticleView } from 'enteties/Article';
import { ArticleListSchema } from 'pages/ArticleListPage';
import { StateSchema } from 'app/providers/StoreProvider';
import { ENTETIES_VIEW } from 'shared/config/const';
import { OrderType } from 'shared/types/orderType';
import { ArticleSortType } from '../types/articleListSchema';
import { fetchArticleList } from '../services/fetchArticleList/fetchArticleList';

export const articleListAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleList = articleListAdapter.getSelectors<StateSchema>(
    (state) => state.articleList || articleListAdapter.getInitialState(),
);

const articlesView = localStorage.getItem(ENTETIES_VIEW) as ArticleView;

const articleListSlice = createSlice({
    name: 'articleListSlice',
    initialState: articleListAdapter.getInitialState<ArticleListSchema>({
        loading: true,
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
        type: ArticleTypes.ALL,
    }),
    reducers: {
        setView(state, action: PayloadAction<ArticleView>) {
            state.view = action.payload;
            localStorage.setItem(ENTETIES_VIEW, action.payload);
        },
        setLimit(state, action: PayloadAction<ArticleView>) {
            state.limit = action.payload === ArticleView.BIG ? 4 : 9;
        },
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
        setInit(state) {
            state._init = true;
        },
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload;
        },
        setOrder(state, action: PayloadAction<OrderType>) {
            state.order = action.payload;
        },
        setSort(state, action: PayloadAction<ArticleSortType>) {
            state.sort = action.payload;
        },
        setType(state, action: PayloadAction<ArticleTypes>) {
            state.type = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.fulfilled, (state, action) => {
                state.error = undefined;
                state.loading = false;
                if (action.payload.length < state.limit) {
                    state.hasMore = false;
                }
                if (action.meta.arg.replace) {
                    articleListAdapter.setAll(state, action.payload);
                } else {
                    articleListAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticleList.pending, (state, action) => {
                state.error = undefined;
                state.hasMore = true;
                state.loading = true;
                if (action.meta.arg.replace) {
                    articleListAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export const { reducer: articleListReducer } = articleListSlice;

export const { actions: articleListActions } = articleListSlice;
