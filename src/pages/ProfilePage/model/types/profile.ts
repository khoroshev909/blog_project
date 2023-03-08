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

export interface ProfileSchema {
    profile: Profile | undefined,
    form: Profile | undefined,
    error: string | undefined,
    loading: boolean,
    readonly : boolean,
}
