import { AutoDetails, RealEstateDetails, ServiceDetails } from "./adTypes";

export interface Step2Form
	extends Partial<RealEstateDetails>,
		Partial<AutoDetails>,
		Partial<ServiceDetails> {}
