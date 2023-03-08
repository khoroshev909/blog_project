import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'pages/ProfilePage';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CurrencyEnum, CurrencySelect } from 'enteties/Currency';
import { useCallback } from 'react';
import { Countries, CountrySelect } from 'enteties/Country';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string,
    data: Profile | undefined,
    error: string | undefined,
    loading: boolean | undefined,
    onChangeFirstName?: (val: string) => void,
    onChangeLastName?: (val: string) => void,
    onChangeAge?: (val: string) => void,
    onChangeCountry?: (val: string) => void,
    onChangeUsername?: (val: string) => void,
    onChangeAvatar?: (val: string) => void,
    onCurrencyChange?: (val: CurrencyEnum) => void,
    readonly?: boolean

}
export const ProfileCard = (props: ProfileCardProps) => {
    const {
        data,
        error,
        className,
        loading,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCountry,
        onChangeUsername,
        onChangeAvatar,
        onCurrencyChange,
        readonly,
    } = props;
    const { t } = useTranslation();

    const currencyChangeHandler = useCallback((val: CurrencyEnum) => {
        if (onCurrencyChange) {
            onCurrencyChange(val);
        }
    }, [onCurrencyChange]);

    const changeCountryHandler = useCallback((val: Countries) => {
        if (onChangeCountry) {
            onChangeCountry(val);
        }
    }, [onChangeCountry]);

    if (error) {
        return (
            <div className={classNames('', {}, [className, cls.error])}>
                <Text
                    title={t('Oops... Sometning went wrong')}
                    text={t('Try to reload the page')}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    if (loading) {
        return (
            <div className={classNames('', {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <Avatar src={data.avatar} size={150} />
                )}
                <CurrencySelect
                    readonly={readonly}
                    value={data?.currency}
                    onChange={currencyChangeHandler}
                />
                <CountrySelect
                    readonly={readonly}
                    value={data?.country}
                    onChange={changeCountryHandler}
                />
                <Input
                    value={data?.username}
                    placeholder={t('username')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readOnly={readonly}
                />
                <Input
                    value={String(data?.age)}
                    placeholder={t('age')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readOnly={readonly}
                />
                <Input
                    value={data?.first}
                    placeholder={t('firstName')}
                    className={cls.input}
                    onChange={onChangeFirstName}
                    readOnly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('lastName')}
                    className={cls.input}
                    onChange={onChangeLastName}
                    readOnly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('avatar')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readOnly={readonly}
                />
            </div>
        </div>
    );
};
