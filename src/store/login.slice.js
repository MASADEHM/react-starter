import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        singIn: (state) => {
            state.isLoggedIn = true
        },
        signOut: (state) => {
            state.isLoggedIn = false
        }
    }
})
export const { singIn, signOut } = loginSlice.actions
export default loginSlice.reducer