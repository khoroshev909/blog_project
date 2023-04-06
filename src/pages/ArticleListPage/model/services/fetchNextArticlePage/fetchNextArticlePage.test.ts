import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';
import { fetchNextArticlePage } from '../fetchNextArticlePage/fetchNextArticlePage';

jest.mock('../fetchArticleList/fetchArticleList');

describe('fetchNextArticlePage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articleList: {
                loading: false,
                error: undefined,
                hasMore: true,
                ids: [],
                entities: {},
                limit: 5,
                page: 2,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticleList).toHaveBeenCalledWith({ replace: false });
    });

    test('not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articleList: {
                loading: false,
                error: undefined,
                hasMore: false,
                ids: [],
                entities: {},
                limit: 5,
                page: 2,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticleList).not.toHaveBeenCalledWith({ page: 3 });
    });
});
