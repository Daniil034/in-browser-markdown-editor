import { createSlice } from "@reduxjs/toolkit";

const formatStatusSlice = createSlice({
  name: "formatStatus",
  initialState: false,
  reducers: {
    changeStatus: (state, action) => {
      if (action.payload !== undefined) {
        return action.payload;
      } else {
        return state = !state
      }
    },
  },
});

export const { changeStatus } = formatStatusSlice.actions;

export const selectFormatStatus = (state) => state.formatStatus;

export default formatStatusSlice.reducer;
