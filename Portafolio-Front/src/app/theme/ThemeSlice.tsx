import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../Store'

// Define a type for the slice state
interface ThemeState {
  darkMode: boolean
}

// Define the initial state using that type

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

    // Use the PayloadAction type to declare the contents of `action.payload`
    changeTheme: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem('darkMode',
        JSON.stringify(state.darkMode))
    },
  },
})

export const { changeTheme } = themeSlice.actions


// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default themeSlice.reducer
