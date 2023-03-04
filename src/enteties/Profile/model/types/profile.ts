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
    profile: Profile,
    error: string,
    loading: boolean,
    readonly : boolean,
}
