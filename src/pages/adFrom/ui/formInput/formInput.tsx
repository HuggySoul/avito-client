import st from "./formInput.module.css";
import { IProps } from "./types";

export const FormInput = ({
	register,
	errorMessage,
	type,
	placeholder,
	valueAsNumber,
	inputName,
	required,
}: IProps) => {
	return (
		<div className={st.inputBlock}>
			<div className={st.inputBlock}>
				<input
					type={type}
					className={st.adInput}
					{...register(inputName, { required: required, valueAsNumber: valueAsNumber })}
					placeholder={placeholder}
				/>
				{errorMessage && <p className={st.errorTxt}>{errorMessage}</p>}
			</div>
		</div>
	);
};
