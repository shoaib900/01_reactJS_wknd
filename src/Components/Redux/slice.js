import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState :{value :0},
    reducers:{
        inc: (state) => { state.value += 1 },
        dec: (state) => { state.value -= 1 },
        reset: state => { state.value = 0}
    }
})

export const {inc,dec,reset} = counterSlice.actions;

export default counterSlice.reducer;


