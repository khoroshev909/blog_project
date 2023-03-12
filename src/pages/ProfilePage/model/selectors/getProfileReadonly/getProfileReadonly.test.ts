import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('profile readonly selector', () => {
    test('with readonly true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });

    test('with readonly false', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: false,
            },
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(false);
    });

    test('with readonly undef', () => {
        const state:DeepPartial<StateSchema> = {
            profile: {
                readonly: undefined,
            },
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
