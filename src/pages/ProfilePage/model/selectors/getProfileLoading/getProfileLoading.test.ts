import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileLoading } from './getProfileLoding';

describe('profile loading selector', () => {
    test('with loading true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                loading: true,
            },
        };
        expect(getProfileLoading(state as StateSchema)).toEqual(true);
    });

    test('with loading false', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                loading: false,
            },
        };
        expect(getProfileLoading(state as StateSchema)).toEqual(false);
    });

    test('with undef', () => {
        const state:DeepPartial<StateSchema> = {
            profile: {
                loading: undefined,
            },
        };
        expect(getProfileLoading(state as StateSchema)).toEqual(undefined);
    });
});
