import { Countries, Currency } from 'shared/config/const';

export interface Profile {
    first: string;
    lastname: string;
    age: number;
    currency: Currency;
    country: Countries;
    city: string;
    username: string;
    avatar: string;
}

export interface ProfileSchema {
    profile: Profile | undefined,
    error: string | undefined,
    loading: boolean,
    readonly : boolean,
}
