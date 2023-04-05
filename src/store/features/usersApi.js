import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
    reducerPath : 'usersApi',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    
    endpoints : (build) => ({
        getUsers : build.mutation({
            query : (body) => ({
                url : 'Get/Users',
                method : 'POST', 
                body
            })
        })
    })
})

export const { useGetUsersMutation } = usersApi