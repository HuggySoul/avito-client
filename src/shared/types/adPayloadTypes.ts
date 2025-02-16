import { Ad, AutoDetails, RealEstateDetails, ServiceDetails } from "./adTypes";
// Типы для получения и создания объявления в api
export type AdPayload = Ad<RealEstateDetails> | Ad<AutoDetails> | Ad<ServiceDetails>;

export type AdsResponse =
	| Ad<RealEstateDetails>[]
	| Ad<AutoDetails>[]
	| Ad<ServiceDetails>[];
