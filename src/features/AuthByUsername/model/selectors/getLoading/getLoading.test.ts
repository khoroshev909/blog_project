import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoading } from './getLoading';

describe('getLoading.test', () => {
    test('true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                loading: true,
            },
        };
        expect(getLoading(state as StateSchema)).toEqual(true);
    });

    test('false', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                loading: false,
            },
        };
        expect(getLoading(state as StateSchema)).toEqual(false);
    });

    test('undefined', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                loading: undefined,
            },
        };
        expect(getLoading(state as StateSchema)).toEqual(false);
    });
});
