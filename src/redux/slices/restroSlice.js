import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restro: null
}

export const restroSlice = createSlice({
  name: 'restro',
  initialState,
  reducers: {
    setRestro: (state, action) => {
      state.restro = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setRestro } = restroSlice.actions

export const selectRestro = state=> state.restro.restro;

export default restroSlice.reducer