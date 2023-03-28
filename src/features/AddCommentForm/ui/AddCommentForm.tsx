import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { DynamicReducerLoader, reducerList } from 'shared/lib/components/DynamycReducerLoader/DynamicReducerLoader';
import { commentTextSelector } from '../model/selectors/addCommentSelectors';
import { addCommentActions, addCommentReducer } from '../model/slice/addCommentSlice';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string,
    onAddComment: (text: string) => void
}

const reducers: reducerList = {
    addCommentForm: addCommentReducer,
};

const AddCommentForm = memo(({ className, onAddComment }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const commentText = useSelector(commentTextSelector);
    const onCommentChange = useCallback((value: string) => {
        dispatch(addCommentActions.setComment(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onAddComment(commentText || '');
        dispatch(addCommentActions.setComment(''));
    }, [commentText, dispatch, onAddComment]);

    return (
        <DynamicReducerLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    value={commentText}
                    onChange={onCommentChange}
                />
                <Button
                    theme={ButtonTheme.OUTLINED}
                    onClick={onSendHandler}
                >
                    {t('add')}
                </Button>
            </div>
        </DynamicReducerLoader>
    );
});

export default AddCommentForm;
