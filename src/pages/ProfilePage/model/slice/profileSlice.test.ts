import { CurrencyEnum } from 'enteties/Currency';
import { Countries } from 'enteties/Country';
import { fetchProfileData } from 'pages/ProfilePage/services/fetchProfileData/fetchProfileData';
import { ProfileSchema, ValidateErrors } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

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

describe('profileSlice.test', () => {
    test('fetchProfileData.fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            loading: true,
            form: { ...data, first: 'Alex' },
            profile: data,
        };
        expect(profileReducer(
            state as ProfileSchema,
            fetchProfileData.fulfilled({ ...data, first: 'Alex' }, ''),
        )).toEqual({
            loading: false,
            form: { ...data, first: 'Alex' },
            profile: { ...data, first: 'Alex' },
        });
    });
    test('fetchProfileData.pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            loading: false,
            error: 'some error',
            validateErrors: [ValidateErrors.LASTNAME_REQUIRED],
        };
        expect(profileReducer(
            state as ProfileSchema,
            fetchProfileData.pending(''),
        )).toEqual({
            loading: true,
            error: undefined,
            validateErrors: [],
        });
    });
    test('setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });
    test('setErrors', () => {
        const state: DeepPartial<ProfileSchema> = { validateErrors: [] };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setErrors([ValidateErrors.LASTNAME_REQUIRED]),
        )).toEqual({ validateErrors: [ValidateErrors.LASTNAME_REQUIRED] });
    });
    test('cancelFormEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            profile: data,
            form: { ...data, first: 'Alex' },
            validateErrors: [ValidateErrors.LASTNAME_REQUIRED],
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelFormEdit(),
        )).toEqual({
            validateErrors: [],
            readonly: true,
            profile: data,
            form: data,
        });
    });
    test('setFormData', () => {
        const state: DeepPartial<ProfileSchema> = {
            profile: data,
            form: { ...data, first: 'Alex' },
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setFormData(),
        )).toEqual({
            profile: data,
            form: data,
        });
    });
    test('setProfileFormData', () => {
        const state: DeepPartial<ProfileSchema> = {
            profile: data,
            form: data,
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setProfileFormData({ ...data, first: 'Alex' }),
        )).toEqual({
            profile: data,
            form: { ...data, first: 'Alex' },
        });
    });
});
