import { getProfileError } from './getProfileError';
describe('profile errpr selector', function () {
    test('with error', function () {
        var state = {
            profile: {
                error: '123',
            },
        };
        expect(getProfileError(state)).toEqual('123');
    });
    test('with undefined', function () {
        var state = {
            profile: {
                error: undefined,
            },
        };
        expect(getProfileError(state)).toEqual(undefined);
    });
});
