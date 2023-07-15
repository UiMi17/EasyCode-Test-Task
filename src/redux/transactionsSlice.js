import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
  statistic: { balance: 0, income: 0, cost: 0 },
  filter: "",
};

const transactionsSlice = createSlice({
  name: "@@transactions",
  initialState,
  reducers: {
    addTransaction: (state, { payload }) => {
      state.transactions.push(payload);
    },
    updateStatsIncome: (state, { payload }) => {
      state.statistic.balance += payload;
      state.statistic.income += payload;
    },
    updateStatsCost: (state, { payload }) => {
      state.statistic.balance -= payload;
      state.statistic.cost += payload;
    },
  },
});

export const {
  addTransaction,
  updateStatsIncome,
  updateStatsCost,
} = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
