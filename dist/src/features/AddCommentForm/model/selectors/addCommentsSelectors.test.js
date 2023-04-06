import { commentErrorSelector, commentTextSelector } from '../selectors/addCommentSelectors';
describe('add comments form selectors tests', function () {
    test('comment text selector', function () {
        var state = {
            addCommentForm: {
                text: 'text',
            },
        };
        expect(commentTextSelector(state)).toEqual('text');
    });
    test('comment error selector', function () {
        var state = {
            addCommentForm: {
                error: 'error',
            },
        };
        expect(commentErrorSelector(state)).toEqual('error');
    });
});
