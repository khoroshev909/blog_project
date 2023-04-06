import { ValidateErrors } from 'pages/ProfilePage/model/types/profile';
export function validateProfileErrors(profile) {
    var _a, _b, _c;
    var errors = [];
    if (!profile.username) {
        errors.push(ValidateErrors.USERNAME_REQUIRED);
    }
    if (((_a = profile === null || profile === void 0 ? void 0 : profile.username) === null || _a === void 0 ? void 0 : _a.length) && profile.username.length < 3) {
        errors.push(ValidateErrors.USERNAME_MIN_LENGTH);
    }
    if (!profile.first) {
        errors.push(ValidateErrors.FIRSTNAME_REQUIRED);
    }
    if (((_b = profile === null || profile === void 0 ? void 0 : profile.first) === null || _b === void 0 ? void 0 : _b.length) && profile.first.length < 3) {
        errors.push(ValidateErrors.FIRSTNAME_MIN_LENGTH);
    }
    if (!profile.lastname) {
        errors.push(ValidateErrors.LASTNAME_REQUIRED);
    }
    if (((_c = profile === null || profile === void 0 ? void 0 : profile.lastname) === null || _c === void 0 ? void 0 : _c.length) && profile.lastname.length < 3) {
        errors.push(ValidateErrors.LASTNAME_MIM_LENGTH);
    }
    if (!profile.age || !Number.isInteger(profile.age)) {
        errors.push(ValidateErrors.AGE_REQUIRED);
    }
    return errors;
}
