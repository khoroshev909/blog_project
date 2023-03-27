import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'enteties/Article';
import { ArticleListSchema } from 'pages/ArticleListPage';
import { StateSchema } from 'app/providers/StoreProvider';
import { ENTETIES_VIEW } from 'shared/config/const';
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
        loading: false,
        error: undefined,
        view: articlesView,
        limit: articlesView === ArticleView.SMALL ? 9 : 4,
        page: 1,
        hasMore: true,
        ids: [],
        entities: {},
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.fulfilled, (state, action: PayloadAction<Article[]>) => {
                articleListAdapter.addMany(state, action.payload);
                state.error = undefined;
                state.loading = false;
                if (!action.payload.length) {
                    state.hasMore = false;
                }
            })
            .addCase(fetchArticleList.pending, (state) => {
                state.error = undefined;
                state.loading = true;
            })
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export const { reducer: articleListReducer } = articleListSlice;

export const { actions: articleListActions } = articleListSlice;
