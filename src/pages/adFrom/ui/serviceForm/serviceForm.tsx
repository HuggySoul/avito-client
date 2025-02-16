import { IProps } from "./types";
import { SERVICE_TYPES } from "../../../../shared/model";
import { FormSelector } from "../formSelector";
import { FormInput } from "../formInput";

// Форма заполнения данных об услуге
export const ServiceForm = ({ register, errors }: IProps) => {
	return (
		<>
			<FormSelector
				register={register}
				items={SERVICE_TYPES}
				selectName="serviceType"
				placeholder="Выберете тип услуги*"
				required={"Поле обязательно для заполнения"}
				errorMessage={errors.serviceType?.message}
			/>
			<FormInput
				register={register}
				errorMessage={errors.experience?.message}
				inputName="experience"
				placeholder="Опыт работы (лет)*"
				valueAsNumber={true}
				type="number"
				required={"Поле обязательно для заполнения"}
			/>
			<FormInput
				register={register}
				errorMessage={errors.cost?.message}
				inputName="cost"
				placeholder="Стоимость услуги*"
				valueAsNumber={true}
				type="number"
				required={"Поле обязательно для заполнения"}
			/>
			<FormInput
				register={register}
				errorMessage={errors.workSchedule?.message}
				inputName="workSchedule"
				placeholder="График работы"
			/>
		</>
	);
};
