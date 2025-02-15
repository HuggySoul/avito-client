import { IProps } from "./types";
import { FormSelector } from "../formSelector";
import { FormInput } from "../formInput";
import { AUTO_BRANDS } from "../../../../shared/model";

export const AutoForm = ({ register, errors }: IProps) => {
	return (
		<>
			<FormSelector
				register={register}
				items={AUTO_BRANDS}
				selectName="brand"
				placeholder="Выберете марку*"
				required={"Поле обязательно для заполнения"}
				errorMessage={errors.brand?.message}
			/>
			<FormInput
				register={register}
				errorMessage={errors.model?.message}
				inputName="model"
				placeholder="Модель*"
				required={"Поле обязательно для заполнения"}
			/>
			<FormInput
				register={register}
				errorMessage={errors.year?.message}
				inputName="year"
				placeholder="Год выпуска*"
				valueAsNumber={true}
				type="number"
				required={"Поле обязательно для заполнения"}
			/>
			<FormInput
				register={register}
				errorMessage={errors.mileage?.message}
				inputName="mileage"
				placeholder="Пробег(км)*"
				valueAsNumber={true}
				type="number"
				required={"Поле обязательно для заполнения"}
			/>
		</>
	);
};
