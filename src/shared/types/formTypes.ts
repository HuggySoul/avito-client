import { AutoDetails, RealEstateDetails, ServiceDetails } from "./adTypes";

// Тип формы на втором шаге
export interface Step2Form
	extends Partial<RealEstateDetails>,
		Partial<AutoDetails>,
		Partial<ServiceDetails> {}
