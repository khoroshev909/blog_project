import { StateSchema } from 'app/providers/StoreProvider';
import { LoginSchema } from '../../types/LoginSchema';
import { getError } from './getError';

describe('getError.test', () => {
    test('with value', () => {
        const loginForm: DeepPartial<LoginSchema> = {
            error: 'error',
        };
        expect(getError({ loginForm } as StateSchema)).toEqual('error');
    });

    test('with undefined', () => {
        const loginForm: DeepPartial<LoginSchema> = {
            error: undefined,
        };
        expect(getError({ loginForm } as StateSchema)).toEqual(undefined);
    });
});
