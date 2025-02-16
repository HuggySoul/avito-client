import st from "./formSelector.module.css";
import { Iprops } from "./types";

//Стандартный селектор формы
export const FormSelector = ({
	register,
	errorMessage,
	items,
	required,
	selectName,
	placeholder,
}: Iprops) => {
	return (
		<div className={st.inputBlock}>
			<select
				{...register(selectName, {
					required: required,
				})}
				className={st.formSelector}
			>
				<option value="">{placeholder}</option>
				{items.map((item, i) => (
					<option key={i} value={item}>
						{item}
					</option>
				))}
			</select>
			{errorMessage && <p className={st.errorTxt}>{errorMessage}</p>}
		</div>
	);
};
