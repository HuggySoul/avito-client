import { BaseAd } from "../../../../shared/types";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { Step2Form } from "../../../../shared/types";

export interface IProps {
	register: UseFormRegister<BaseAd & Step2Form>;
	errors: FieldErrors<BaseAd & Step2Form>;
}
