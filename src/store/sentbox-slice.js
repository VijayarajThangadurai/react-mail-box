import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sentboxItems:[],
    sentMessageOpen: JSON.parse(localStorage.getItem('sentMessage open'))
};

const sentboxSlice = createSlice({
    name: "sentbox",
    initialState,
    reducers:{
        addItems(state, action){
            state.sentboxItems = action.payload;
        },
        addMessageOpen(state, action){
            state.sentMessageOpen = action.payload[1];
            const msgopen = JSON.stringify(action.payload[1]);
            localStorage.setItem('sentMessage open', msgopen);
        },
        removeItem(state, action){
            const filterItems= state.sentboxItems.filter(element=>element[0]!== action.payload[0]);
            state.sentboxItems = filterItems;
        }
    }
});
export const sentboxActions = sentboxSlice.actions;
export const sentboxItemFill = (email)=>{
    return async (dispatch)=>{
        try{
            const userEmail = email.replace(/[\.@]/g,"");
            const resSentbox = await fetch(`https://mailboxreact-default-rtdb.firebaseio.com/${userEmail}/sentEmails.json`);
            const data = await resSentbox.json();
            if(resSentbox.ok){
                dispatch(sentboxActions.addItems(Object.entries(data)));
            }
        }catch(error){
            alert(error);
        }
    }
};
export default sentboxSlice.reducer;