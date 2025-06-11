import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store';


const accountSlice = createSlice({
  name: 'account',
  initialState: '',
  reducers: {
    set: (_state, action: PayloadAction<string>) =>  action.payload,
  }
});
export const accountActions = accountSlice.actions;

export const accountSelectors = {
  get: (state: RootState): RootState['account'] => {
    return state.account;
  },
};
export const account = accountSlice.reducer;