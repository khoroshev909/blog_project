import { ValidateErrors } from 'pages/ProfilePage/model/types/profile';
import { getValidateErrors } from './getValidateErrors';
describe('profile validate errors', function () {
    test('with one error', function () {
        var state = {
            profile: {
                validateErrors: [
                    ValidateErrors.AGE_REQUIRED,
                ],
            },
        };
        expect(getValidateErrors(state)).toEqual([ValidateErrors.AGE_REQUIRED]);
    });
    test('with two errors', function () {
        var state = {
            profile: {
                validateErrors: [
                    ValidateErrors.AGE_REQUIRED,
                    ValidateErrors.LASTNAME_REQUIRED,
                ],
            },
        };
        expect(getValidateErrors(state)).toEqual([
            ValidateErrors.AGE_REQUIRED,
            ValidateErrors.LASTNAME_REQUIRED,
        ]);
    });
    test('with valid error undef', function () {
        var state = {
            profile: {
                validateErrors: undefined,
            },
        };
        expect(getValidateErrors(state)).toEqual(undefined);
    });
});
