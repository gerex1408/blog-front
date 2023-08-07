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
    const refreshToken = localStorage.getItem('refresh_token');
    if (refreshToken) {
      const refreshResult = await fetch(
        `${process.env.NEXT_PUBLIC_API}/api/users/token/refresh/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ refresh_token: refreshToken }),
        }
      );
      if (refreshResult.ok) {
        const data = await refreshResult.json();
        // store the new token
        api.dispatch(actions.setAuthState(data));
        // retry the initial query
        result = await baseQuery(args, api, extraOptions);
      }
    } else {
      api.dispatch(actions.resetAuthState());
    }
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
    me: builder.query({
      query: () => '/users/me/',
    }),
  }),
});

export const { useLoginMutation, useMeQuery } = api;
