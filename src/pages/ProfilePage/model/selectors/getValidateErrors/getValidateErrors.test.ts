import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateErrors } from '../../types/profile';
import { getValidateErrors } from './getValidateErrors';

describe('profile validate errors', () => {
    test('with one error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateErrors.AGE_REQUIRED,
                ],
            },
        };
        expect(getValidateErrors(state as StateSchema)).toEqual([ValidateErrors.AGE_REQUIRED]);
    });

    test('with two errors', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateErrors.AGE_REQUIRED,
                    ValidateErrors.LASTNAME_REQUIRED,
                ],
            },
        };
        expect(getValidateErrors(state as StateSchema)).toEqual([
            ValidateErrors.AGE_REQUIRED,
            ValidateErrors.LASTNAME_REQUIRED,
        ]);
    });

    test('with valid error undef', () => {
        const state:DeepPartial<StateSchema> = {
            profile: {
                validateErrors: undefined,
            },
        };
        expect(getValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
