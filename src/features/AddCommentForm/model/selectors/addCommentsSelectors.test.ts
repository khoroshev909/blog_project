import { StateSchema } from 'app/providers/StoreProvider';
import { commentErrorSelector, commentTextSelector } from '../selectors/addCommentSelectors';

describe('add comments form selectors tests', () => {
    test('comment text selector', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'text',
            },
        };

        expect(commentTextSelector(state as StateSchema)).toEqual('text');
    });

    test('comment error selector', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'error',
            },
        };

        expect(commentErrorSelector(state as StateSchema)).toEqual('error');
    });
});
