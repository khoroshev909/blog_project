import { StateSchema } from 'app/providers/StoreProvider';

export const commentTextSelector = (state: StateSchema) => state.addCommentForm?.text;
export const commentErrorSelector = (state: StateSchema) => state.addCommentForm?.error;
