import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { addCommentForArticle } from './addCommentForArticle';

const data = {
    id: '1',
    text: 'some comment',
    articleId: '1',
    userId: '1',
};

describe('addCommentForArticle.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: {
                authData: {
                    id: '1',
                },
            },
            articleDetails: {
                data: {
                    id: '1',
                },
            },
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('text');

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: {
                authData: {
                    id: '1',
                },
            },
            articleDetails: {
                data: {
                    id: '1',
                },
            },
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk('text');

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error');
    });
});
