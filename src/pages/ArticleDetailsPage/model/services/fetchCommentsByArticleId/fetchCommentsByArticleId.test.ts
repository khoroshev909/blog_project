import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { Comment } from 'enteties/Comment';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

const data: Comment = {
    id: '1',
    text: 'some comment',
    user: {
        id: '1',
        username: 'admin',
        avatar: 'https://avatars.mds.yandex.net/i?id=8dff73fec96ef7bfce66de8320a3a3ef147dfbc0-4614822-images-thumbs&n=13&exp=1',
    },
};

describe('addCommentForArticle.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId, {});
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId, {});
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error');
    });
});
