import { configureStore } from "@reduxjs/toolkit"
import  ThemeSlice  from "./theme/ThemeSlice"


export const store = configureStore({
    reducer: {
        theme: ThemeSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch