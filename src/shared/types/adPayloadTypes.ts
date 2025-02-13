import { Ad, AutoDetails, RealEstateDetails, ServiceDetails } from "./adTypes";

export type AdPayload = Ad<RealEstateDetails> | Ad<AutoDetails> | Ad<ServiceDetails>;

export type AdsResponse =
	| Ad<RealEstateDetails>[]
	| Ad<AutoDetails>[]
	| Ad<ServiceDetails>[];
