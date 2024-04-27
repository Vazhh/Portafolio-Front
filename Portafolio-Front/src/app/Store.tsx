import { configureStore } from "@reduxjs/toolkit"
import  ThemeSlice  from "./theme/ThemeSlice"


export const store = configureStore({
    reducer: {
        theme: ThemeSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch