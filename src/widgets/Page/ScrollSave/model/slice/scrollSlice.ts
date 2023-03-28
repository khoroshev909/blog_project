import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSchema } from '../types/scroll';

const initialState: ScrollSchema = {
    position: {},
};

const scrollSlice = createSlice({
    name: 'scrollSlice',
    initialState,
    reducers: {
        setScrollPosition(state, { payload }: PayloadAction<{ pageUrl: string, scrollTop: number }>) {
            state.position[payload.pageUrl] = payload.scrollTop;
        },
    },
});

export const { actions: scrollActions } = scrollSlice;
export const { reducer: scrollReducer } = scrollSlice;
