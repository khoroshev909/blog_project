import { addCommentActions, addCommentReducer } from '../../model/slice/addCommentSlice';
describe('add comments reducer tests', function () {
    test('setComment action', function () {
        var state = {
            text: '',
        };
        expect(addCommentReducer(state, addCommentActions.setComment('text'))).toEqual({ text: 'text' });
    });
});
