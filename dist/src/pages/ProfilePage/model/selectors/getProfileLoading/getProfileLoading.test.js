import { getProfileLoading } from './getProfileLoding';
describe('profile loading selector', function () {
    test('with loading true', function () {
        var state = {
            profile: {
                loading: true,
            },
        };
        expect(getProfileLoading(state)).toEqual(true);
    });
    test('with loading false', function () {
        var state = {
            profile: {
                loading: false,
            },
        };
        expect(getProfileLoading(state)).toEqual(false);
    });
    test('with undef', function () {
        var state = {
            profile: {
                loading: undefined,
            },
        };
        expect(getProfileLoading(state)).toEqual(undefined);
    });
});
