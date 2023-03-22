import { AddCommentFormSchema } from 'features/AddCommentForm';
import { addCommentActions, addCommentReducer } from '../../model/slice/addCommentSlice';

describe('add comments reducer tests', () => {
    test('setComment action', () => {
        const state: DeepPartial<AddCommentFormSchema> = {
            text: '',
        };

        expect(addCommentReducer(
            state as AddCommentFormSchema,
            addCommentActions.setComment('text'),
        )).toEqual({ text: 'text' });
    });
});
