import { getLoginState } from './getLoginState';
describe('getLoginState.test', function () {
    test('test', function () {
        var state = {
            loginForm: {
                loading: false,
                username: 'admin',
                password: '123',
                error: undefined,
            },
        };
        expect(getLoginState(state)).toEqual({
            loading: false,
            username: 'admin',
            password: '123',
            error: undefined,
        });
    });
});
