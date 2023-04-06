import { getProfileReadonly } from './getProfileReadonly';
describe('profile readonly selector', function () {
    test('with readonly true', function () {
        var state = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(state)).toEqual(true);
    });
    test('with readonly false', function () {
        var state = {
            profile: {
                readonly: false,
            },
        };
        expect(getProfileReadonly(state)).toEqual(false);
    });
    test('with readonly undef', function () {
        var state = {
            profile: {
                readonly: undefined,
            },
        };
        expect(getProfileReadonly(state)).toEqual(undefined);
    });
});
