import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUsername } from './getUsername';

describe('getUsername.test', () => {
    test('value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
            },
        };
        expect(getUsername(state as StateSchema)).toEqual('admin');
    });

    test('undefined', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: undefined,
            },
        };
        expect(getUsername(state as StateSchema)).toEqual('');
    });
});
