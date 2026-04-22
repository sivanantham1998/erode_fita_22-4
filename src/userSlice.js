import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const api_url = "https://69d7a4ef9c5ebb0918c81c29.mockapi.io/user";


export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
    const res = await axios.get(api_url);
    console.log(res.data)
    return res.data;
})

export const addUser = createAsyncThunk("users/addUser", async (data) => {
    const res = await axios.post(api_url, data)
    if (res.status === 201) {
        alert("Data saved!!")
        return res.data
    } else {
        console.log("something error");
    }
})
const userSlice = createSlice({
    name: "users",
    initialState: {
        list: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.list = action.payload
        })
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.list.push(action.payload)
        })
    }
})

export default userSlice.reducer