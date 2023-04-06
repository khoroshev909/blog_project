var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { CurrencyEnum } from 'enteties/Currency';
import { Countries } from 'enteties/Country';
import { fetchProfileData } from 'pages/ProfilePage/services/fetchProfileData/fetchProfileData';
import { ValidateErrors } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
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
describe('profileSlice.test', function () {
    test('fetchProfileData.fulfilled', function () {
        var state = {
            loading: true,
            form: __assign(__assign({}, data), { first: 'Alex' }),
            profile: data,
        };
        expect(profileReducer(state, fetchProfileData.fulfilled(__assign(__assign({}, data), { first: 'Alex' }), '1', ''))).toEqual({
            loading: false,
            form: __assign(__assign({}, data), { first: 'Alex' }),
            profile: __assign(__assign({}, data), { first: 'Alex' }),
        });
    });
    test('fetchProfileData.pending', function () {
        var state = {
            loading: false,
            error: 'some error',
            validateErrors: [ValidateErrors.LASTNAME_REQUIRED],
        };
        expect(profileReducer(state, fetchProfileData.pending('1', ''))).toEqual({
            loading: true,
            error: undefined,
            validateErrors: [],
        });
    });
    test('setReadonly', function () {
        var state = { readonly: false };
        expect(profileReducer(state, profileActions.setReadonly(true))).toEqual({ readonly: true });
    });
    test('setErrors', function () {
        var state = { validateErrors: [] };
        expect(profileReducer(state, profileActions.setErrors([ValidateErrors.LASTNAME_REQUIRED]))).toEqual({ validateErrors: [ValidateErrors.LASTNAME_REQUIRED] });
    });
    test('cancelFormEdit', function () {
        var state = {
            readonly: false,
            profile: data,
            form: __assign(__assign({}, data), { first: 'Alex' }),
            validateErrors: [ValidateErrors.LASTNAME_REQUIRED],
        };
        expect(profileReducer(state, profileActions.cancelFormEdit())).toEqual({
            validateErrors: [],
            readonly: true,
            profile: data,
            form: data,
        });
    });
    test('setFormData', function () {
        var state = {
            profile: data,
            form: __assign(__assign({}, data), { first: 'Alex' }),
        };
        expect(profileReducer(state, profileActions.setFormData())).toEqual({
            profile: data,
            form: data,
        });
    });
    test('setProfileFormData', function () {
        var state = {
            profile: data,
            form: data,
        };
        expect(profileReducer(state, profileActions.setProfileFormData(__assign(__assign({}, data), { first: 'Alex' })))).toEqual({
            profile: data,
            form: __assign(__assign({}, data), { first: 'Alex' }),
        });
    });
});
