import { createApi } from '@reduxjs/toolkit/query/react';
import { IOrder, IOrdersReponse } from '../types/types';
import { baseQuery } from './baseApi';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: baseQuery,
  tagTypes: ['Order'],
  endpoints: (builder) => ({
    getOrders: builder.query<IOrdersReponse, string>({
      query: () => ({
        url: `/order`,
      }),
      providesTags: ['Order']
    }),
    getOrderById: builder.query<IOrder, number>({
      query: (id) => ({
        url: `/order/${id}`,
      })
    }),
    updateOrder: builder.mutation<IOrder, IOrder>({
      query: (order) => ({
        url: `/order/${order.id}`,
        method: 'PUT',
        body: order
      }),
      invalidatesTags: ['Order']
    })
  })
})

export const { useGetOrdersQuery, useGetOrderByIdQuery, useUpdateOrderMutation } = orderApi;