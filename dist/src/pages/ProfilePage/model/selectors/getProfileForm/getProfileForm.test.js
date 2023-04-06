import { CurrencyEnum } from 'enteties/Currency';
import { Countries } from 'enteties/Country';
import { getProfileForm } from './getProfileForm';
describe('profile form selector', function () {
    var data = {
        first: 'Eugene',
        lastname: 'Khoroshev',
        age: 27,
        currency: CurrencyEnum.RUB,
        country: Countries.RUS,
        city: 'Tuymen',
        username: 'Coder',
        avatar: 'https://avatars.mds.yandex.net/i?id=b2a8579e7806b8e45105c7c072ec35dab25a20e2-8297859-images-thumbs&n=13',
    };
    test('with data', function () {
        var state = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state)).toEqual(data);
    });
    test('with undefined', function () {
        var state = {
            profile: {
                form: undefined,
            },
        };
        expect(getProfileForm(state)).toEqual(undefined);
    });
});
