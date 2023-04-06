var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { DynamicReducerLoader } from 'shared/lib/components/DynamycReducerLoader/DynamicReducerLoader';
import { commentTextSelector } from '../model/selectors/addCommentSelectors';
import { addCommentActions, addCommentReducer } from '../model/slice/addCommentSlice';
import cls from './AddCommentForm.module.scss';
var reducers = {
    addCommentForm: addCommentReducer,
};
var AddCommentForm = memo(function (_a) {
    var className = _a.className, onAddComment = _a.onAddComment;
    var t = useTranslation().t;
    var dispatch = useAppDispatch();
    var commentText = useSelector(commentTextSelector);
    var onCommentChange = useCallback(function (value) {
        dispatch(addCommentActions.setComment(value));
    }, [dispatch]);
    var onSendHandler = useCallback(function () {
        onAddComment(commentText || '');
        dispatch(addCommentActions.setComment(''));
    }, [commentText, dispatch, onAddComment]);
    return (_jsx(DynamicReducerLoader, __assign({ reducers: reducers }, { children: _jsxs("div", __assign({ className: classNames(cls.AddCommentForm, {}, [className]) }, { children: [_jsx(Input, { className: cls.input, value: commentText, onChange: onCommentChange }, void 0), _jsx(Button, __assign({ theme: ButtonTheme.OUTLINED, onClick: onSendHandler }, { children: t('add') }), void 0)] }), void 0) }), void 0));
});
export default AddCommentForm;
