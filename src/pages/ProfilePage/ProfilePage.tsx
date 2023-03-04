import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicReducerLoader, reducerList } from 'shared/lib/components/DynamycReducerLoader/DynamicReducerLoader';
import { profileReducer } from 'enteties/Profile';

interface ProfilePageProps {
    className?: string
}

const reducers: reducerList = { profile: profileReducer };
console.log(reducers);

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    return (
        <DynamicReducerLoader reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                {t('profilePage')}
            </div>
        </DynamicReducerLoader>
    );
});
export default ProfilePage;
