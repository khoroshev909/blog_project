import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';
import { initArticleListPage } from './initArticleListPage';

jest.mock('../fetchArticleList/fetchArticleList');
const searchParams = new URLSearchParams(window.location.search);

describe('initArticleListPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(initArticleListPage, {
            articleList: {
                _init: false,
                page: 1,
                limit: 4,
            },
        });
        await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticleList).toHaveBeenCalled();
    });

    test('allredy inited', async () => {
        const thunk = new TestAsyncThunk(initArticleListPage, {
            articleList: {
                _init: true,
                page: 1,
                limit: 4,
            },
        });
        await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticleList).not.toHaveBeenCalled();
    });
});
