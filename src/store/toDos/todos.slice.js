import { createSlice } from "@reduxjs/toolkit";



export const todoSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state, action) => {
           return state = state + action.payload
        },
        reset: (state) => {
            return state = 0
        }
    }
}
)


export const {increment, reset} = todoSlice.actions
export default todoSlice.reducer