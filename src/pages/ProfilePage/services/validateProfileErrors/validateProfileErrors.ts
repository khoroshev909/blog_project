import { Profile } from 'pages/ProfilePage';
import { ValidateErrors } from 'pages/ProfilePage/model/types/profile';

export function validateProfileErrors(profile: Profile): ValidateErrors[] {
    const errors = [];

    if (!profile.username) {
        errors.push(ValidateErrors.USERNAME_REQUIRED);
    }

    if (profile?.username?.length && profile.username.length < 3) {
        errors.push(ValidateErrors.USERNAME_MIN_LENGTH);
    }

    if (!profile.first) {
        errors.push(ValidateErrors.FIRSTNAME_REQUIRED);
    }

    if (profile?.first?.length && profile.first.length < 3) {
        errors.push(ValidateErrors.FIRSTNAME_MIN_LENGTH);
    }

    if (!profile.lastname) {
        errors.push(ValidateErrors.LASTNAME_REQUIRED);
    }

    if (profile?.lastname?.length && profile.lastname.length < 3) {
        errors.push(ValidateErrors.LASTNAME_MIM_LENGTH);
    }

    if (!profile.age || !Number.isInteger(profile.age)) {
        errors.push(ValidateErrors.AGE_REQUIRED);
    }

    return errors;
}
