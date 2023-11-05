import { createSlice } from "@reduxjs/toolkit";

const initialState = { pressed: false };

const contactPressedSlice = createSlice({
  name: "contactPress",
  initialState,
  reducers: {
    pressedOn(state) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
      state.pressed = true;
    },
    pressedOff(state) {
      state.pressed = false;
    },
  },
});
export const { pressedOff, pressedOn } = contactPressedSlice.actions;
export default contactPressedSlice.reducer;
