import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/commentForm';

const initialState: AddCommentFormSchema = {
    text: '',
    error: undefined,
    loading: false,
};

const addCommentSlice = createSlice({
    name: 'addCommentSlice',
    initialState,
    reducers: {
        setComment(state, action: PayloadAction<string>) {
            state.text = action.payload;
        },
    },
});

export const { actions: addCommentActions } = addCommentSlice;
export const { reducer: addCommentReducer } = addCommentSlice;
