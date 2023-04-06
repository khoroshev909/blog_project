import { getPassword } from './getPassword';
describe('getPassword.test', function () {
    test('value', function () {
        var loginForm = {
            password: '123',
        };
        expect(getPassword({ loginForm: loginForm })).toEqual('123');
    });
    test('undefined', function () {
        var loginForm = {
            password: undefined,
        };
        expect(getPassword({ loginForm: loginForm })).toEqual('');
    });
});
