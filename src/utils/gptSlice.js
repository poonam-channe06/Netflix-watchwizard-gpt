import { createSlice } from "@reduxjs/toolkit";



const gptSlice = createSlice({
    name: "gpt",
    initialState : {
        showGptSearch: false
    },
    reducers :{
        toggleGptSeaarchView:(state)=>{
            state.showGptSearch = !state.showGptSearch
        }
    }
})


export const {toggleGptSeaarchView} = gptSlice.actions

export default gptSlice.reducer;