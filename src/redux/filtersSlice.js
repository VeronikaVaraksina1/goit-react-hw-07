import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// експорт генератора екшенів
export const { changeFilter } = filtersSlice.actions;

// експорт редюсера
export default filtersSlice.reducer;

// експорт селектора
export const selectNameFilter = state => state.filters.name;
