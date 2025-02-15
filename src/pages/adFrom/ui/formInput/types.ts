import { BaseAd } from "../../../../shared/types";
import { UseFormRegister } from "react-hook-form";
import { Step2Form } from "../../../../shared/types";

export interface IProps {
	register: UseFormRegister<BaseAd & Step2Form>;
	errorMessage: string | undefined;
	type?: string;
	placeholder: string;
	valueAsNumber?: boolean;
	inputName:
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
}
