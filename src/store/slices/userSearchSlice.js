import { createSlice } from "@reduxjs/toolkit";

export const userSearchSlice = createSlice({
    name : 'searchUser',
    initialState : {
        user : []
    },
    reducers : {
        getUser : (state , action) => {
            console.log(action.payload , state)
            // const newUser = action.payload
            // state.userSearchSlice.user = [newUser]
        }
    },
})

export const { getUser } = userSearchSlice.actions;