import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PhotoType } from 'types/photo';

type LightboxStateType = {
  isOpen: boolean;
  index: number;
  photo: PhotoType | null;
};

const LightboxInitialState: LightboxStateType = {
  isOpen: false,
  photo: null,
  index: 0,
};

const lightBoxSlide = createSlice({
  name: 'lightBox',
  initialState: LightboxInitialState,
  reducers: {
    closeLightBox(state) {
      state.isOpen = false;
      state.photo = null;
      state.index = 0;
    },
    openLightBox(
      state,
      { payload }: PayloadAction<{ photo: PhotoType; index: number }>
    ) {
      state.isOpen = true;
      state.photo = payload.photo;
      state.index = payload.index;
    },
  },
});

export const { closeLightBox, openLightBox } = lightBoxSlide.actions;

export default lightBoxSlide.reducer;
