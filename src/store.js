// const initalState = {
//     count: 0
// }

// export const store = (state = initalState, action) => {
//     if (action.type === "INCREMENT") {
//         return { count: state.count + 1 }
//     }

//     return state
// }

import { configureStore } from "@reduxjs/toolkit"
// import todoSlice from "./todoSlice"
import userSlice from "./userSlice"
export const store = configureStore({
    reducer: {
        // todo: todoSlice
        users: userSlice
    }
})