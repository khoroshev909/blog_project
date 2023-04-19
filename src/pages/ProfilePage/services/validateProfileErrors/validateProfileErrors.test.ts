import { CurrencyEnum } from 'enteties/Currency';
import { Countries } from 'enteties/Country';
import { ValidateErrors } from '../../model/types/profile';
import { validateProfileErrors } from './validateProfileErrors';

const data = {
    first: 'Eugene',
    lastname: 'Khoroshev',
    age: 27,
    currency: CurrencyEnum.RUB,
    country: Countries.RUS,
    city: 'Tuymen',
    username: 'Coder',
    avatar: 'https://avatars.mds.yandex.net/i?id=b2a8579e7806b8e45105c7c072ec35dab25a20e2-8297859-images-thumbs&n=13',
};

describe('validateProfileErrors.test', () => {
    test('success validation', async () => {
        const errors = validateProfileErrors(data);
        expect(errors).toEqual([]);
    });

    test('invalid firstname', async () => {
        const errors = validateProfileErrors({ ...data, first: '' });
        expect(errors).toEqual([ValidateErrors.FIRSTNAME_REQUIRED]);
    });

    test('invalid lastname', async () => {
        const errors = validateProfileErrors({ ...data, lastname: '' });
        expect(errors).toEqual([ValidateErrors.LASTNAME_REQUIRED]);
    });

    test('invalid age', async () => {
        const errors = validateProfileErrors({ ...data, age: undefined });
        expect(errors).toEqual([ValidateErrors.AGE_REQUIRED]);
    });

    test('invalid username', async () => {
        const errors = validateProfileErrors({ ...data, username: '' });
        expect(errors).toEqual([ValidateErrors.USERNAME_REQUIRED]);
    });

    test('invalid firstname and lastname', async () => {
        const errors = validateProfileErrors({ ...data, first: '', lastname: '' });
        expect(errors).toEqual([
            ValidateErrors.FIRSTNAME_REQUIRED,
            ValidateErrors.LASTNAME_REQUIRED,
        ]);
    });
});
