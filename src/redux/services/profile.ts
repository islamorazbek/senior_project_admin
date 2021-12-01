import { createApi } from "@reduxjs/toolkit/query/react";
import { IUser, IUserResponse } from "../types/types";
import { baseQuery } from "./baseApi";

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getProfiles: builder.query<IUserResponse, string>({
      query: () => ({
        url: `/profile`
      })
    }),
    createProfile: builder.query<IUser, IUser>({
      query: (profile) => ({
        url: `/profile`,
        method: 'POST',
        body: profile
      })
    }),
    updateProfile: builder.query<IUser, IUser>({
      query: (profile) => ({
        url: `/profile/${profile.id}`,
        method: 'PUT',
        body: profile
      })
    }),
  })
})

export const { useGetProfilesQuery, useCreateProfileQuery, useUpdateProfileQuery } = profileApi;