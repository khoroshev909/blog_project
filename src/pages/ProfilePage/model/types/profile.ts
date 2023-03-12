import { CurrencyEnum } from 'enteties/Currency';
import { Countries } from 'enteties/Country';

export interface Profile {
    first?: string;
    lastname?: string;
    age?: number;
    currency?: CurrencyEnum;
    country?: Countries;
    city?: string;
    username?: string;
    avatar?: string;
}

export enum ValidateErrors {
    'USERNAME_REQUIRED' = 'Username is required',
    'USERNAME_MIN_LENGTH' = 'Username min length is 3 characters',
    'AGE_REQUIRED' = 'Age is required',
    'FIRSTNAME_REQUIRED' = 'Firstname is required',
    'FIRSTNAME_MIN_LENGTH' = 'Firstname min length is 3 characters',

    'LASTNAME_REQUIRED' = 'Lastname is required',

    'LASTNAME_MIM_LENGTH' = 'Lastname min length is 3 characters',
}

export interface ProfileSchema {
    profile: Profile | undefined,
    form: Profile | undefined,
    error: string | undefined,
    loading: boolean,
    readonly : boolean,
    validateErrors: ValidateErrors[]
}
