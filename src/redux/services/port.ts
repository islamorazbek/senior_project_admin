import { createApi } from '@reduxjs/toolkit/query/react';
import { IPort, IPortNew, IPortResponse } from '../types/types';
import { baseQuery } from './baseApi';

export const portApi = createApi({
  reducerPath: 'portApi',
  baseQuery: baseQuery,
  tagTypes: ['Ports'],
  endpoints: (builder) => ({
    getPorts: builder.query<IPortResponse, string>({
      query: () => ({
        url: `/port`,
      }),
      providesTags: ['Ports']
    }),
    getPortById: builder.query<IPort, number>({
      query: (id) => ({
        url: `/port/${id}`,
      })
    }),
    createPort: builder.mutation<IPort, IPortNew>({
      query: (port) => ({
        url: `/port`,
        method: 'POST',
        body: port
      }),
      invalidatesTags: ['Ports']
    }),
    updatePort: builder.mutation<IPort, IPort>({
      query: (port) => ({
        url: `/port/${port.id}`,
        method: 'PUT',
        body: port
      }),
      invalidatesTags: ['Ports']
    }),
    deletePort: builder.mutation<{ status: "OK" }, number>({
      query: (id) => ({
        url: `/port/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Ports']
    }),
  })
})

export const { useGetPortsQuery, useGetPortByIdQuery, useCreatePortMutation, useUpdatePortMutation, useDeletePortMutation } = portApi;