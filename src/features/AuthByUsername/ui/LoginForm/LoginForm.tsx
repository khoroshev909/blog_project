import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginByUsername, loginReducer } from 'features/AuthByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicReducerLoader, reducerList } from 'shared/lib/components/DynamycReducerLoader/DynamicReducerLoader';
import { getError } from '../../model/selectors/getLoginState/getError';
import { getPassword } from '../../model/selectors/getLoginState/getPassword';
import { getUsername } from '../../model/selectors/getLoginState/getUsername';
import cls from './LoginForm.module.scss';
import { getLoading } from '../../model/selectors/getLoginState/getLoading';
import { loginActions } from '../../model/slice/loginSlice';

export interface LoginFormProps {
    className?: string
}

const reducers: reducerList = { loginForm: loginReducer };

const LoginForm = memo(({ className }: LoginFormProps) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { setUsername, setPassword } = loginActions;
    const username = useSelector(getUsername);
    const password = useSelector(getPassword);
    const loading = useSelector(getLoading);
    const error = useSelector(getError);

    const onUsernameChange = useCallback((value: string) => {
        dispatch(setUsername(value));
    }, [dispatch, setUsername]);

    const onPasswordChange = useCallback((value: string) => {
        dispatch(setPassword(value));
    }, [dispatch, setPassword]);

    const clickHandler = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <DynamicReducerLoader reducers={reducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('loginForm')} />
                {error && (
                    <Text
                        text={t(error)}
                        theme={TextTheme.ERROR}
                    />
                )}
                <Input
                    value={username}
                    onChange={onUsernameChange}
                    autoFocus
                    className={cls.input}
                    placeholder={t('userName')}
                />
                <Input
                    value={password}
                    onChange={onPasswordChange}
                    className={cls.input}
                    placeholder={t('password')}
                />
                <Button
                    disabled={loading}
                    className={cls.loginBtn}
                    onClick={clickHandler}
                >
                    {t('login')}
                </Button>
            </div>
        </DynamicReducerLoader>

    );
});

export default LoginForm;
