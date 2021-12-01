import { createApi } from '@reduxjs/toolkit/query/react';
import { ILogin, ILoginResponse, IRegistration, IRegistrationResponse, IUser } from '../types/types';
import { baseQuery } from './baseApi';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery,
  tagTypes: ['User', 'Token'],
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, ILogin>({
      query: (creds) => ({
        url: `/auth/login`,
        method: 'POST',
        body: creds,
      }),
      invalidatesTags: ['Token'],
    }),
    getMyProfile: builder.query<IUser, string>({
      query: () => ({
        url: `/profile/my`
      }),
      providesTags: ['User'],
    })
  })
})

export const { useLoginMutation, useGetMyProfileQuery } = authApi;