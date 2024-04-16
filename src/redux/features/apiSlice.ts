/* eslint-disable unicorn/filename-case */
import { createSlice } from '@reduxjs/toolkit';

interface Data {
  id: number;
  name: string;
}

interface ApiState {
  data: Data | null;
  loading: boolean;
  error: string | null;
}

const initialState: ApiState = {
  data: null,
  loading: false,
  error: null,
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    fetchData: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchData, fetchDataSuccess, fetchDataError } = apiSlice.actions;
export default apiSlice.reducer;
