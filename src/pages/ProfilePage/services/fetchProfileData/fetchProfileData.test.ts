import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { CurrencyEnum } from 'enteties/Currency';
import { Countries } from 'enteties/Country';
import { fetchProfileData } from './fetchProfileData';

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

describe('fetchProfileData.test', () => {
    test('success fetching', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error fetching', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
