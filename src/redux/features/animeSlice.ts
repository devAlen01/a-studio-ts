import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  itemPage: number;
};

const initialState: initialStateType = {
  itemPage: 25,
};

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {
    changePage(state, action: PayloadAction<number>) {
      state.itemPage = action.payload;
    },
  },
});

export const { changePage } = animeSlice.actions;

export default animeSlice.reducer;
