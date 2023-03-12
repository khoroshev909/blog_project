import { CurrencyEnum } from 'enteties/Currency';
import { Countries } from 'enteties/Country';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';

describe('profile data selector', () => {
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
    test('with data', () => {
        const state:DeepPartial<StateSchema> = {
            profile: {
                profile: data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('with undefined', () => {
        const state:DeepPartial<StateSchema> = {
            profile: undefined,
        };
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
