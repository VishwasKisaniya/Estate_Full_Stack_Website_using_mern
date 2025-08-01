import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signinStart:(state) =>{
            state.loading = true;
        },
        signInSuccess: (state, action) =>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action)=>{
            state.error= action.payload;
            state.loading = false;
        },
        updateUserStart: (state)=>{
            state.loading = true;
        },
        updateUserSuccess: (state,action)=>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error= null;
        },
        updateUserFailureL: (state,action)=>{
            state.error = action.payload;
            state.loading = false;
        },
        deleteUserStart: (state) =>{
            state.loading = true;
            
        },
        deleteUserSuccess: (state) =>{
            state.currentUser = null;
            state.loading = false;
            state.error = null;
        },
        deleteUserFailure: (state,action) =>{
            state.currentUser = action.payload;
            state.loading = false;
        },
        signOutUserStart: (state) =>{
        state.loading = true;
            
        },
        signOutUserSuccess: (state) =>{
        state.currentUser = null;
            state.loading = false;
            state.error = null;
        },
        signOutUserFailure: (state,action) =>{
            state.currentUser = action.payload;
            state.loading = false;
        },
    },
});

export const {
    signinStart,
    signInSuccess, 
    signInFailure,
    updateUserFailure,
    updateUserSuccess, 
    updateUserStart,
    deleteUserFailure,
    deleteUserSuccess,
    deleteUserStart,
    signOutUserFailure,
    signOutUserStart,
    signOutUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;