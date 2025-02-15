import { BaseAd } from "../../../../shared/types";
import { UseFormRegister } from "react-hook-form";
import {
	AD_CATEGORIES,
	REAL_ESTATE_TYPES,
	AUTO_BRANDS,
	SERVICE_TYPES,
} from "../../../../shared/model";
import { Step2Form } from "../../../../shared/types";

type REAL_ESTATE_TYPES = typeof REAL_ESTATE_TYPES;
type AUTO_BRANDS = typeof AUTO_BRANDS;
type SERVICE_TYPES = typeof SERVICE_TYPES;
type AD_CATEGORIES = typeof AD_CATEGORIES;

export interface Iprops {
	register: UseFormRegister<BaseAd & Step2Form>;
	placeholder: string;
	selectName:
		| "propertyType"
		| "area"
		| "rooms"
		| "price"
		| "brand"
		| "model"
		| "year"
		| "mileage"
		| "serviceType"
		| "experience"
		| "cost"
		| "workSchedule"
		| "type"
		| "id"
		| "name"
		| "description"
		| "location"
		| "photo";
	required?: string | undefined;
	items: REAL_ESTATE_TYPES | AUTO_BRANDS | SERVICE_TYPES | AD_CATEGORIES;
	errorMessage: string | undefined;
}
