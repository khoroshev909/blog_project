import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicReducerLoader, reducerList } from 'shared/lib/components/DynamycReducerLoader/DynamicReducerLoader';
import { ProfileCard } from 'enteties/Profile';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { CurrencyEnum } from 'enteties/Currency';
import { Countries } from 'enteties/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useParams } from 'react-router-dom';
import useInitialEffect from 'shared/hooks/useInitialEffect';
import { Page } from 'widgets/Page';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getValidateErrors } from '../../model/selectors/getValidateErrors/getValidateErrors';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoding';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { fetchProfileData } from '../../services/fetchProfileData/fetchProfileData';
import { ProfilePageHeader } from '../ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
    className?: string
}

const reducers: reducerList = { profile: profileReducer };

const ProfilePage:FC<ProfilePageProps> = memo(({ className }: ProfilePageProps) => {
    const { id } = useParams<{id: string}>();
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const loading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getValidateErrors);

    const onChangeFirstName = (val: string) => {
        dispatch(profileActions.setProfileFormData({ ...formData, first: val }));
    };

    const onChangeLastName = (val: string) => {
        dispatch(profileActions.setProfileFormData({ ...formData, lastname: val }));
    };

    const onChangeAge = (val: string) => {
        dispatch(profileActions.setProfileFormData({ ...formData, age: Number(val) }));
    };

    const onChangeCountry = (val: string) => {
        dispatch(profileActions.setProfileFormData({ ...formData, country: val as Countries }));
    };

    const onChangeUsername = (val: string) => {
        dispatch(profileActions.setProfileFormData({ ...formData, username: val }));
    };

    const onCurrencyChange = (val: CurrencyEnum) => {
        dispatch(profileActions.setProfileFormData({ ...formData, currency: val }));
    };

    const onChangeAvatar = (val: string) => {
        dispatch(profileActions.setProfileFormData({ ...formData, avatar: val }));
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    return (
        <DynamicReducerLoader reducers={reducers}>
            <Page className={classNames('', {}, [className])}>
                {!!validateErrors?.length && validateErrors.map((error) => (
                    <Text key={error} text={error} theme={TextTheme.ERROR} />
                ))}
                <ProfilePageHeader readonly={readonly} />
                <ProfileCard
                    data={formData}
                    error={error}
                    loading={loading}
                    onChangeUsername={onChangeUsername}
                    onCurrencyChange={onCurrencyChange}
                    onChangeAvatar={onChangeAvatar}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCountry={onChangeCountry}
                    readonly={readonly}
                />
            </Page>
        </DynamicReducerLoader>
    );
});
export default ProfilePage;
