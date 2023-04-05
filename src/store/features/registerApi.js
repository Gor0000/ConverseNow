import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const registerApi = createApi({
    reducerPath : 'auth/register',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (build) => ({
        registerUser : build.mutation({
            query : (body) => ({
                url : 'auth/register',
                method : 'POST', 
                body
            })
        }),
        changeProfileImage : build.mutation({
            query : (body) => ({
                url : 'auth/register/changeProfileImg',
                method : 'PATCH', 
                body
            })
        })
    })
})

export const {useRegisterUserMutation , useChangeProfileImageMutation} = registerApi