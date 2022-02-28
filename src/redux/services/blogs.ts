import { createApi } from '@reduxjs/toolkit/query/react';
import { IBlog, IBlogNew, IBlogsReponse } from '../types/IBlog';
import { baseQuery } from './baseApi';

export const blogsApi = createApi({
  reducerPath: 'blogsApi',
  baseQuery: baseQuery,
  tagTypes: ['Blogs'],
  endpoints: (builder) => ({
    getBlogs: builder.query<IBlogsReponse, string>({
      query: () => ({
        url: `/blog`,
      }),
      providesTags: ['Blogs']
    }),
    createBlog: builder.mutation<IBlogsReponse, IBlogNew>({
      query: (blog) => ({
        url: `/blog`,
        method: 'POST',
        body: blog
      }),
      invalidatesTags: ['Blogs']
    }),
    editBlog: builder.mutation<IBlogsReponse, IBlog>({
      query: (blog) => ({
        url: `/blog/${blog.id}`,
        method: 'PUT',
        body: blog,
      }),
      invalidatesTags: ['Blogs']
    }),
  })
})

export const { useGetBlogsQuery, useCreateBlogMutation, useEditBlogMutation } = blogsApi;