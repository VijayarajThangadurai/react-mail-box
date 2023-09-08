import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    tokenId: '',
    email:null,
}

const authSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers:{
        login(state, action){
            state.tokenId = action.payload.tokenId;
            state.email = action.payload.email;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;