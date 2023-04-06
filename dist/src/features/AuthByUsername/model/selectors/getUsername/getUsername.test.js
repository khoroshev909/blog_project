import { getUsername } from './getUsername';
describe('getUsername.test', function () {
    test('value', function () {
        var loginForm = {
            username: 'admin',
        };
        expect(getUsername({ loginForm: loginForm })).toEqual('admin');
    });
    test('undefined', function () {
        var loginForm = {
            username: undefined,
        };
        expect(getUsername({ loginForm: loginForm })).toEqual('');
    });
});
