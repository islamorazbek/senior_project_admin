import { createApi } from '@reduxjs/toolkit/query/react';
import { IPrice } from '../types/types';
import { baseQuery } from './baseApi';

export const priceApi = createApi({
  reducerPath: 'priceApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getPrice: builder.query<IPrice, string>({
      query: () => ({
        url: `/price`,
      })
    }),
    createPrice: builder.query<IPrice, { price_value: string }>({
      query: (price) => ({
        url: `/price`,
        method: 'POST',
        body: price
      })
    }),
    updatePrice: builder.mutation<IPrice, { price_value: string }>({
      query: (price) => ({
        url: `/price`,
        method: 'PUT',
        body: price
      })
    })
  })
})

export const { useGetPriceQuery, useCreatePriceQuery, useUpdatePriceMutation } = priceApi;