import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { updateProfileData } from 'pages/ProfilePage/services/updateProfileData/updateProfileData';
import cls from './ProfilePageHeader.module.scss';
import { profileActions } from '../../model/slice/profileSlice';

interface ProfilePageHeaderProps {
    className?: string
    readonly: boolean | undefined
}
export const ProfilePageHeader = ({ className, readonly }: ProfilePageHeaderProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const onAllowEdit = () => {
        dispatch(profileActions.setReadonly(false));
    };

    const onCancelEdit = () => {
        dispatch(profileActions.cancelFormEdit());
    };

    const onSave = () => {
        dispatch(updateProfileData());
    };

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('profile')} />
            {readonly ? (
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINED}
                    onClick={onAllowEdit}
                >
                    {t('edit')}
                </Button>
            ) : (
                <div className={cls.buttons}>
                    <Button
                        className={cls.editBtn}
                        theme={ButtonTheme.RED}
                        onClick={onSave}
                    >
                        {t('save')}
                    </Button>
                    <Button
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINED}
                        onClick={onCancelEdit}
                    >
                        {t('cancel')}
                    </Button>
                </div>
            )}
        </div>
    );
};
