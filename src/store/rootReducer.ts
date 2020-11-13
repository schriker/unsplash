import { combineReducers } from '@reduxjs/toolkit';
import lightBoxReducer from 'store/slices/lightboxSlice';
import { createSelectorHook } from 'react-redux';

const rootReducer = combineReducers({
  lightBox: lightBoxReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector = createSelectorHook<RootState>();

export default rootReducer;
