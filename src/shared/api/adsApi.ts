import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AdPayload, AdsResponse } from "../types";

// Создание API для работы с объявлениями
export const adsApi = createApi({
	reducerPath: "adsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
	tagTypes: ["Ads"],
	endpoints: (builder) => ({
		// Получение списка объявлений с пагинацией
		getAds: builder.query<
			{ items: AdsResponse; total: number; page: number; totalPages: number },
			{ page: number; limit: number }
		>({
			query: ({ page, limit }) => `/items?page=${page}&limit=${limit}`,
			providesTags: ["Ads"],
		}),

		// Получение объявления по ID
		getAdById: builder.query<AdPayload, number>({
			query: (id) => `/items/${id}`,
			providesTags: (result, error, id) => [{ type: "Ads", id }],
		}),

		// Создание нового объявления
		createAd: builder.mutation<AdPayload, Partial<AdPayload>>({
			query: (newAd) => ({
				url: "/items",
				method: "POST",
				body: newAd,
			}),
			invalidatesTags: ["Ads"],
		}),

		// Обновление существующего объявления
		updateAd: builder.mutation<AdPayload, { id: number; data: Partial<AdPayload> }>({
			query: ({ id, data }) => ({
				url: `/items/${id}`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: (result, error, { id }) => [{ type: "Ads", id }],
		}),

		// Удаление объявления по ID
		deleteAd: builder.mutation<void, number>({
			query: (id) => ({
				url: `/items/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Ads"],
		}),

		// Поиск объявления по названию
		searchAds: builder.query<
			{ items: AdsResponse; total: number },
			{ adName: string; page: number; limit: number }
		>({
			query: ({ adName, page, limit }) =>
				`/items/search?name=${adName}&page=${page}&limit=${limit}`,
		}),
	}),
});

// Экспорт хуков для использования в компонентах
export const {
	useGetAdsQuery,
	useGetAdByIdQuery,
	useSearchAdsQuery,
	useCreateAdMutation,
	useUpdateAdMutation,
	useDeleteAdMutation,
} = adsApi;
