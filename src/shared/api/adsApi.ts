import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AdPayload, AdsResponse } from "../types";

export const adsApi = createApi({
	reducerPath: "adsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
	tagTypes: ["Ads"],
	endpoints: (builder) => ({
		getAds: builder.query<
			{ items: AdsResponse; total: number; page: number; totalPages: number },
			{ page: number; limit: number }
		>({
			query: ({ page, limit }) => `/items?page=${page}&limit=${limit}`,
			providesTags: ["Ads"],
		}),
		getAdById: builder.query<AdPayload, number>({
			query: (id) => `/items/${id}`,
			providesTags: (result, error, id) => [{ type: "Ads", id }],
		}),
		createAd: builder.mutation<AdPayload, Partial<AdPayload>>({
			query: (newAd) => ({
				url: "/items",
				method: "POST",
				body: newAd,
			}),
			invalidatesTags: ["Ads"],
		}),
		updateAd: builder.mutation<AdPayload, { id: number; data: Partial<AdPayload> }>({
			query: ({ id, data }) => ({
				url: `/items/${id}`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: (result, error, { id }) => [{ type: "Ads", id }],
		}),
		deleteAd: builder.mutation<void, number>({
			query: (id) => ({
				url: `/items/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Ads"],
		}),
	}),
});

export const {
	useGetAdsQuery,
	useGetAdByIdQuery,
	useCreateAdMutation,
	useUpdateAdMutation,
	useDeleteAdMutation,
} = adsApi;
