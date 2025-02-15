import { useState } from "react";
import { useForm } from "react-hook-form";
import st from "./adForm.module.css";
import { BaseAd } from "../../../../shared/types";
import { AD_CATEGORIES } from "../../../../shared/model";
import PrimaryBtn from "../../../../shared/ui/primaryBtn/primaryBtn";
import { FormInput } from "../formInput";
import { FormSelector } from "../formSelector";
import { RealEstateForm } from "../realEstateForm";
import { AutoForm } from "../autoForm";
import { ServiceForm } from "../serviceForm";
import { Step2Form } from "../../../../shared/types";

const AdForm = () => {
	const [step, setStep] = useState(1);
	const [photoPreview, setPhotoPreview] = useState<string | null>(null);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		trigger,
	} = useForm<Step2Form & BaseAd>({
		mode: "onChange",
	});

	const selectedCategory = watch("type");

	const onSubmit = async (data: BaseAd & Step2Form) => {
		const isValid = await trigger();
		if (isValid) console.log("Form submitted:", data);
	};

	const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPhotoPreview(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleNextStep = async () => {
		const isValid = await trigger();
		if (isValid) {
			setStep(2);
		}
	};

	return (
		<main className={st.formPage}>
			<form className={st.adForm} onSubmit={handleSubmit(onSubmit)}>
				<h1>Создайте объявление:</h1>
				{step === 1 && (
					<>
						<FormInput
							register={register}
							errorMessage={errors.name?.message}
							inputName="name"
							placeholder="Название объявления*"
							required={"Поле обязательно для заполнения"}
						/>
						<div className={st.inputBlock}>
							<textarea
								rows={5}
								className={st.adTextarea}
								{...register("description", { required: "Описание обязательно" })}
								placeholder="Описание*"
							/>
							{errors.description && (
								<p className={st.errorTxt}>{errors.description.message}</p>
							)}
						</div>
						<FormInput
							register={register}
							errorMessage={errors.location?.message}
							inputName="location"
							placeholder="Локация*"
							required={"Поле обязательно для заполнения"}
						/>
						{photoPreview ? (
							<div className={st.photoPreviewWrapper}>
								<div className={st.photoPreviewBlock}>
									<img src={photoPreview} alt="Preview" className={st.photoPreview} />
								</div>
								<PrimaryBtn action={() => setPhotoPreview(null)}>
									<span className={st.btnTxt}>Удалить фото</span>
								</PrimaryBtn>
							</div>
						) : (
							<>
								<label className={st.photoInputLabel} htmlFor="photoInput">
									Добавить фото
								</label>
								<input
									id="photoInput"
									accept="image/*"
									type="file"
									className={st.adPhotoInput}
									{...register("photo")}
									onChange={handlePhotoChange}
								/>
							</>
						)}
						<FormSelector
							register={register}
							errorMessage={errors.type?.message}
							items={AD_CATEGORIES}
							placeholder="Выберите категорию*"
							required={"Поле обязательно для заполнения"}
							selectName="type"
						/>
						<div className={st.btnWrapper}>
							<PrimaryBtn
								disabled={
									!!errors.type ||
									!!errors.location ||
									!!errors.description ||
									!!errors.name
								}
								action={handleNextStep}
							>
								<span className={st.btnTxt}>Далее</span>
							</PrimaryBtn>
						</div>
					</>
				)}

				{step === 2 && (
					<>
						{selectedCategory === "Недвижимость" && (
							<RealEstateForm register={register} errors={errors} />
						)}

						{selectedCategory === "Авто" && (
							<AutoForm register={register} errors={errors} />
						)}

						{selectedCategory === "Услуги" && (
							<ServiceForm register={register} errors={errors} />
						)}
						<div className={st.submitBtnsBlock}>
							<PrimaryBtn action={() => setStep(1)}>
								<span className={st.btnTxt}>Назад</span>
							</PrimaryBtn>
							<PrimaryBtn>
								<span className={st.btnTxt}>Отправить</span>
							</PrimaryBtn>
						</div>
					</>
				)}
			</form>
		</main>
	);
};

export default AdForm;
