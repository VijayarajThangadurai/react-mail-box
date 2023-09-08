import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    tokenId: localStorage.getItem('user'),
    email:localStorage.getItem('userEmail'),
}

const authSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers:{
        login(state, action){
            state.tokenId = action.payload.tokenId;
            state.email = action.payload.email;
            localStorage.setItem('user',action.payload.tokenId);
            localStorage.setItem('userEmail', action.payload.email);
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;