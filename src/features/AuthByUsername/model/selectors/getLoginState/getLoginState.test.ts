import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
    test('test', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                loading: false,
                username: 'admin',
                password: '123',
                error: undefined,
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            loading: false,
            username: 'admin',
            password: '123',
            error: undefined,
        });
    });
});
