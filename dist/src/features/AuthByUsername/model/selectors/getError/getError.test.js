import { getError } from './getError';
describe('getError.test', function () {
    test('with value', function () {
        var loginForm = {
            error: 'error',
        };
        expect(getError({ loginForm: loginForm })).toEqual('error');
    });
    test('with undefined', function () {
        var loginForm = {
            error: undefined,
        };
        expect(getError({ loginForm: loginForm })).toEqual(undefined);
    });
});
