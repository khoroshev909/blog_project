import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollPositionAllPages = (state: StateSchema) => state.scroll.position;

export const getScrollPagePosition = createSelector(
    (state: StateSchema) => getScrollPositionAllPages(state),
    (state: StateSchema, pageUrl: string) => pageUrl,
    (scrollData, pageUrl) => scrollData[pageUrl],
);
