import { FC, lazy } from 'react';
import { AddCommentFormProps } from 'features/AddCommentForm/ui/AddCommentForm';

export const AddCommentFormLazy = lazy<FC<AddCommentFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AddCommentForm')), 500);
}));
