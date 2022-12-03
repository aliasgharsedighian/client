import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { amount: 0 };

export const addToCardSlice = createSlice({
  name: "addtocards",
  initialState: { value: initialStateValue },
  reducers: {
    addToCard: (state) => {
      state.value.amount = state.value.amount += 1;
    },
  },
});

export const { addToCard } = addToCardSlice.actions;
export default addToCardSlice.reducer;
