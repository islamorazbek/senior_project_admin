import { createApi } from '@reduxjs/toolkit/query/react';
import { IBlog, IBlogNew, IBlogsReponse } from '../types/IBlog';
import { INewPromo, IPromo, IPromoResponse } from '../types/types';
import { baseQuery } from './baseApi';

export const promocodesApi = createApi({
  reducerPath: 'promocodesApi',
  baseQuery: baseQuery,
  tagTypes: ['Promos'],
  endpoints: (builder) => ({
    getPromos: builder.query<IPromoResponse, string>({
      query: () => ({
        url: `/promocode`,
      }),
      providesTags: ['Promos']
    }),
    createPromo: builder.mutation<INewPromo, IPromo>({
      query: (promo) => ({
        url: `/promocode`,
        method: 'POST',
        body: promo
      }),
      invalidatesTags: ['Promos']
    }),
  })
})

export const { useCreatePromoMutation, useGetPromosQuery } = promocodesApi;