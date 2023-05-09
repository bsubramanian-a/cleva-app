import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = 'https://localhost:3000/';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Journals'],
  endpoints: (builder) => ({
    getJournals: builder.query({
      query: () => ({
        url: `${baseUrl}/journals`,
        method: 'GET',
      }),
      transformResponse: (response: { data:any }, meta, arg) => response.data,
      transformErrorResponse: (
        response: { status: string | number },
        meta,
        arg
      ) => response.status,
      providesTags: (result, error, id) => [{ type: 'Journals' }],
    }),
  }),
}); 

export const { useGetJournalsQuery } = api;