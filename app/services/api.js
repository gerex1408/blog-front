'use client';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { actions } from '../(admin)/login/reducer';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API + '/api',
  prepareHeaders: (headers, { getState }) => {
    headers.set('content-type', 'application/json');

    const token = getState().auth?.authState?.access_token;
    if (token) {
      headers.set('authorization', token);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    api.dispatch(actions.resetAuthState());
  }
  return result;
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/users/login/',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = api;
