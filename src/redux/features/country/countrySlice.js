import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    country : [],
}
export const getCountry = createAsyncThunk('getCountry',async()=> {
    const {data} = await axios('https://restcountries.com/v3.1/all')
    return data
})
export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{

    },
    extraReducers : (builder) => {
        builder.addCase(getCountry.fulfilled,(state,action) => {
            state.country = action.payload
        })
    }
})

export default counterSlice.reducer