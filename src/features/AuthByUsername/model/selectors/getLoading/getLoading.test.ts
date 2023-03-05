import { StateSchema } from 'app/providers/StoreProvider';
import { LoginSchema } from 'features/AuthByUsername';
import { getLoading } from './getLoading';

describe('getLoading.test', () => {
    test('true', () => {
        const loginForm: DeepPartial<LoginSchema> = {
            loading: true,
        };
        expect(getLoading({ loginForm } as StateSchema)).toEqual(true);
    });

    test('false', () => {
        const loginForm: DeepPartial<LoginSchema> = {
            loading: false,
        };
        expect(getLoading({ loginForm } as StateSchema)).toEqual(false);
    });

    test('undefined', () => {
        const loginForm: DeepPartial<LoginSchema> = {
            loading: undefined,
        };
        expect(getLoading({ loginForm } as StateSchema)).toEqual(false);
    });
});
