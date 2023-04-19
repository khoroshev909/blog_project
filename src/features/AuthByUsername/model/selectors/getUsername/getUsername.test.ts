import { StateSchema } from 'app/providers/StoreProvider';
import { LoginSchema } from '../../types/LoginSchema';
import { getUsername } from './getUsername';

describe('getUsername.test', () => {
    test('value', () => {
        const loginForm: DeepPartial<LoginSchema> = {
            username: 'admin',
        };
        expect(getUsername({ loginForm } as StateSchema)).toEqual('admin');
    });

    test('undefined', () => {
        const loginForm: DeepPartial<LoginSchema> = {
            username: undefined,
        };
        expect(getUsername({ loginForm } as StateSchema)).toEqual('');
    });
});
