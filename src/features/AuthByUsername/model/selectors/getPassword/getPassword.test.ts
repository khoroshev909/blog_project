import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getPassword } from './getPassword';

describe('getPassword.test', () => {
    test('value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123',
            },
        };
        expect(getPassword(state as StateSchema)).toEqual('123');
    });

    test('undefined', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: undefined,
            },
        };
        expect(getPassword(state as StateSchema)).toEqual('');
    });
});
