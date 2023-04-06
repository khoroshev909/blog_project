import { createSelector } from '@reduxjs/toolkit';
export var getScrollPositionAllPages = function (state) { return state.scroll.position; };
export var getScrollPagePosition = createSelector(function (state) { return getScrollPositionAllPages(state); }, function (state, pageUrl) { return pageUrl; }, function (scrollData, pageUrl) { return scrollData[pageUrl]; });
