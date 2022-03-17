import { createApi } from '@reduxjs/toolkit/query/react';
import { IAnalyitcsQuery, IEarningsResponse, IPopularDestination } from '../types/IAnalyitcs';
import { baseQuery } from './baseApi';

export const analyticsApi = createApi({
  reducerPath: 'analyticsApi',
  baseQuery: baseQuery,
  tagTypes: ['Destinations', 'Earnings'],
  endpoints: (builder) => ({
    getEarnings: builder.query<IEarningsResponse, IAnalyitcsQuery>({
      query: (query?) => ({
        url: `/analytics/earnings`,
        params: query
      }),
      providesTags: ['Earnings']
    }),
    getPopularDestinations: builder.query<IPopularDestination[], IAnalyitcsQuery>({
      query: (query?) => ({
        url: `/analytics/popular-destinations`,
        params: query
      }),
      providesTags: ['Destinations']
    }),
    getPopularBlogs: builder.query<object, string>({
      query: () => ({
        url: '/analytics/popular-blogs'
      })
    })
  })
})

export const { useGetPopularDestinationsQuery, useGetEarningsQuery, useGetPopularBlogsQuery } = analyticsApi;