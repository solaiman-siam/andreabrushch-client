import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";



export const baseApi = createApi({
    reducerPath: 'baseQuery',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/'}),
    tagTypes: ['test', 'test2'],
    endpoints: (builder) => ({
        getTest: builder.query({
            query: () => '/test',
            providesTags: ['test']
        }),
        createTest: builder.mutation({
            query: (testData) => ({
                url: 'test',
                method: 'POST',
                body: testData
            }),
            invalidatesTags: ['test']
        })
    })
});


export const {useCreateTestMutation, useGetTestQuery} = baseApi