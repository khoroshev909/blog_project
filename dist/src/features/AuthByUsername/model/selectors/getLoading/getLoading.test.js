import { getLoading } from './getLoading';
describe('getLoading.test', function () {
    test('true', function () {
        var loginForm = {
            loading: true,
        };
        expect(getLoading({ loginForm: loginForm })).toEqual(true);
    });
    test('false', function () {
        var loginForm = {
            loading: false,
        };
        expect(getLoading({ loginForm: loginForm })).toEqual(false);
    });
    test('undefined', function () {
        var loginForm = {
            loading: undefined,
        };
        expect(getLoading({ loginForm: loginForm })).toEqual(false);
    });
});
