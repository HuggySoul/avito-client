import { AdPayload } from "../types";
import { Ad, AutoDetails, RealEstateDetails, ServiceDetails } from "../types";
// Проверка типов объявлений
export const isRealEstateAd = (ad: AdPayload | undefined): ad is Ad<RealEstateDetails> =>
	ad?.type === "Недвижимость";

export const isAutoAd = (ad: AdPayload | undefined): ad is Ad<AutoDetails> =>
	ad?.type === "Авто";

export const isServiceAd = (ad: AdPayload | undefined): ad is Ad<ServiceDetails> =>
	ad?.type === "Услуги";
