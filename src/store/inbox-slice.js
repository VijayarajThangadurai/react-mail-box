import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    inboxItems: []
}

const inboxSlice = createSlice({
    name: 'inbox',
    initialState,
    reducers:{
        addItems(state, action){
            state.inboxItems = action.payload;
        }
    }
});

export const inboxActions = inboxSlice.actions;
export default inboxSlice.reducer;