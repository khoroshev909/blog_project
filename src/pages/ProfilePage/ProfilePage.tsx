import React, { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicReducerLoader, reducerList } from 'shared/lib/components/DynamycReducerLoader/DynamicReducerLoader';
import { profileReducer, ProfileCard, getProfileLoading } from 'enteties/Profile';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { getProfileData } from 'enteties/Profile/services/getProfileData/getProfileData';
import { useSelector } from 'react-redux';
import { Loader } from 'shared/ui/Loader/Loader';

interface ProfilePageProps {
    className?: string
}

const reducers: reducerList = { profile: profileReducer };

const ProfilePage:FC<ProfilePageProps> = memo(({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const loading = useSelector(getProfileLoading);

    useEffect(() => {
        dispatch(getProfileData());
    }, [dispatch]);
    return (
        <DynamicReducerLoader reducers={reducers}>
            {loading ? (
                <Loader />
            ) : (
                <div className={classNames('', {}, [className])}>
                    {t('profilePage')}
                    <ProfileCard />
                </div>
            )}
        </DynamicReducerLoader>
    );
});
export default ProfilePage;
