import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('profile errpr selector', () => {
    test('with error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: '123',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('123');
    });

    test('with undefined', () => {
        const state:DeepPartial<StateSchema> = {
            profile: {
                error: undefined,
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
