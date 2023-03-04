import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getError } from './getError';

describe('getError.test', () => {
    test('with value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
            },
        };
        expect(getError(state as StateSchema)).toEqual('error');
    });

    test('with undefined', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: undefined,
            },
        };
        expect(getError(state as StateSchema)).toEqual(undefined);
    });
});
