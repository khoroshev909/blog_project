import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { Loader } from 'shared/ui/Loader/Loader';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoding';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
}
export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation();
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('profile')} />
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINED}
                >
                    {t('edit')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('firstName')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('lastName')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
