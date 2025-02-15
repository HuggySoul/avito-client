import { REAL_ESTATE_TYPES } from "../../../../shared/model";
import { FormSelector } from "../formSelector";
import { FormInput } from "../formInput";
import { IProps } from "./types";

export const RealEstateForm = ({ register, errors }: IProps) => {
	return (
		<>
			<FormSelector
				register={register}
				items={REAL_ESTATE_TYPES}
				selectName="propertyType"
				placeholder="Тип недвижимости*"
				required={"Поле обязательно для заполнения"}
				errorMessage={errors.propertyType?.message}
			/>
			<FormInput
				register={register}
				errorMessage={errors.area?.message}
				inputName="area"
				placeholder="Площадь(кв.м)*"
				required={"Поле обязательно для заполнения"}
				valueAsNumber={true}
				type="number"
			/>
			<FormInput
				register={register}
				errorMessage={errors.rooms?.message}
				inputName="rooms"
				placeholder="Количество комнат*"
				valueAsNumber={true}
				type="number"
				required={"Поле обязательно для заполнения"}
			/>
			<FormInput
				register={register}
				errorMessage={errors.price?.message}
				inputName="price"
				placeholder="Цена*"
				valueAsNumber={true}
				type="number"
				required={"Поле обязательно для заполнения"}
			/>
		</>
	);
};
