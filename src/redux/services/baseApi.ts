import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { setTokens } from "../slices/authSlice";
import { RootState } from "../store";

export const BASE_URL = 'https://one-aviation.herokuapp.com/api/v1/';

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const {
      auth: { access_token },
    } = getState() as RootState;
    if (access_token) {
      headers.set('Authorization', `Bearer ${access_token}`);
    }
    return headers;
  },
});

// const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
//   args,
//   api,
//   extraOptions
// ) => {
//   let result = await baseQuery(args, api, extraOptions);

//   if (result.error && result.error.status === 401) {
//     const refreshResult = await baseQuery({ url: 'token/refresh/', method: 'POST' }, api, extraOptions);

//     if (refreshResult.data) {
//       api.dispatch(setTokens({ accessToken: refreshResult.data as string }));

//       // retry the initial query
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       api.dispatch(logout());
//     }
//   }
//   return result;
// };

// export const baseApi = createApi({
//   reducerPath: 'baseApi',
//   baseQuery: baseQueryWithReauth,
//   endpoints: () => ({}),
// });