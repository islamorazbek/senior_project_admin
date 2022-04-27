import { createApi } from "@reduxjs/toolkit/query/react";
import { ISubscribedUsersResponse } from "../types/ISubscription";
import { IMessagesResponse, IUser, IUserResponse } from "../types/types";
import { baseQuery } from "./baseApi";

export const subscriptionsApi = createApi({
  reducerPath: 'subscriptionsApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getSubscribedUsers: builder.query<ISubscribedUsersResponse, string>({
      query: () => ({
        url: `/subscription`
      })
    }),
    getMessages: builder.query<IMessagesResponse, string>({
      query: () => ({
        url: `/message`
      })
    }),
  })
})

export const { useGetSubscribedUsersQuery, useGetMessagesQuery } = subscriptionsApi;