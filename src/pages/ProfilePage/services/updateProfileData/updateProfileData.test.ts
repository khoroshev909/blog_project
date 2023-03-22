import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { CurrencyEnum } from 'enteties/Currency';
import { Countries } from 'enteties/Country';
import { validateProfileErrors } from 'pages/ProfilePage/services/validateProfileErrors/validateProfileErrors';
import { profileActions } from 'pages/ProfilePage/model/slice/profileSlice';
import { updateProfileData } from './updateProfileData';

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

describe('updateProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('server error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });

    test('validate error', async () => {
        const state = { ...data, lastname: '' };
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: state,
            },
        });

        const result = await thunk.callThunk('1');

        const errors = validateProfileErrors(state);

        expect(thunk.dispatch).toHaveBeenCalledWith(profileActions.setErrors(errors));
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
