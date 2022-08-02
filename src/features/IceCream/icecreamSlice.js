/** @format */

import { createSlice } from "@reduxjs/toolkit";
import {ordered as cakeOrdered} from '../Cake/cakeSlice'

// const { cakeActions } = require("../Cake/cakeSlice");

const initialState = {
  stock: 10,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.stock -= action.payload.stock;
    },
    restock: (state, action) => {
      state.stock += action.payload.stock;
    },
  },
  //if we want to handle the actions of other reducer
  //for example if we have offer that if we buy cake then one icecream is free
  extraReducers: (bulider) => {
    bulider.addCase(cakeOrdered, (state, action) => {
      state.stock--;
    });
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
