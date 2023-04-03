import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const logInApi = createApi({
    reducerPath : 'auth/login',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (build) => ({
        loginUser : build.mutation({
            query : (body) => ({
                url : 'auth/login',
                method : 'POST', 
                body
            })
        })
    })
})

export const {useLoginUserMutation} = logInApi