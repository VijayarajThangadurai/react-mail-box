import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    tokenId: '',
}

const authSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers:{
        login(state, action){
            state.tokenId = action.payload.tokenId;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;