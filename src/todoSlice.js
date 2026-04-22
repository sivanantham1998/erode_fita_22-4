import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        list: []
    },
    reducers: {
        add: (state, action) => {
            if (action.payload) {
                state.list.push(action.payload)
            }
            else {
                return state
            }
        },
        remove: (state, action) => {
            if (action.payload !== undefined) {
                state.list = state.list.filter((_, index) => index !== action.payload)
            }
            else {
                return state
            }
        }
    }
})

export const { add, remove } = todoSlice.actions;
export default todoSlice.reducer