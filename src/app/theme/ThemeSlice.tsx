import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface ThemeState {
  darkMode: boolean
}

const storedDarkMode = localStorage.getItem('darkMode') ;
let initialDarkMode = false;

try {
  if (storedDarkMode !== null) {
    initialDarkMode = JSON.parse(storedDarkMode);
  }
} catch (error) {
  console.error('Error parsing storedDarkMode:', error);
}

const initialState: ThemeState = {
  darkMode: initialDarkMode,
};

export const themeSlice = createSlice({
  name: 'theme',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {

    changeTheme: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem('darkMode',
        JSON.stringify(state.darkMode))
    },
  },
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer
