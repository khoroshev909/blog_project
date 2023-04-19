import { StateSchema } from 'app/providers/StoreProvider';
import { LoginSchema } from '../../types/LoginSchema';
import { getPassword } from './getPassword';

describe('getPassword.test', () => {
    test('value', () => {
        const loginForm: DeepPartial<LoginSchema> = {
            password: '123',
        };
        expect(getPassword({ loginForm } as StateSchema)).toEqual('123');
    });

    test('undefined', () => {
        const loginForm: DeepPartial<LoginSchema> = {
            password: undefined,
        };
        expect(getPassword({ loginForm } as StateSchema)).toEqual('');
    });
});
