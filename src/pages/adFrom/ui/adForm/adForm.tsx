import { useEffect, useState } from "react";
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
import { useParams, useNavigate } from "react-router-dom";
import {
	useGetAdByIdQuery,
	useCreateAdMutation,
	useUpdateAdMutation,
} from "../../../../shared/api/adsApi";

const AdForm = () => {
	const [step, setStep] = useState(1); // шаг формы
	const { id } = useParams(); // id редактируемой формы
	const [createAd] = useCreateAdMutation(); // api для создания объявления
	const [updateAd] = useUpdateAdMutation(); //api для редактирования объявления

	// Получение данных объявления при редактировании
	const isEditMode = Boolean(id);
	const { data: adData } = useGetAdByIdQuery(Number(id), {
		skip: !isEditMode,
	});
	//state для удобства работы с фото
	const [photoPreview, setPhotoPreview] = useState<string | undefined | null>(null);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		trigger,
		reset,
		setValue,
	} = useForm<Step2Form & BaseAd>({
		mode: "onChange",
		defaultValues: {
			photo: !isEditMode ? "" : adData?.photo,
		},
	});
	const navigate = useNavigate();

	//Заполняем форму при получении данных
	useEffect(() => {
		if (adData) {
			reset(adData);
			setPhotoPreview(adData.photo);
		}
	}, [adData, reset]);

	//для отслеживания типа опциональной формы
	const selectedCategory = watch("type");

	const redirect = () => {
		navigate("/list");
		navigate(0); // обновление страницы
	};

	const onSubmit = async (data: BaseAd & Step2Form) => {
		const isValid = await trigger();
		if (!isValid) return;

		try {
			if (isEditMode) {
				await updateAd({ id: Number(id), data }).unwrap();
				redirect();
			} else {
				await createAd(data).unwrap();
				redirect();
			}
		} catch (error) {
			console.error("Ошибка при отправке данных:", error);
		}
	};

	const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				const base64String = reader.result as string;
				setPhotoPreview(base64String);
				// Обновляем поле photo в useForm
				setValue("photo", base64String);
			};
			reader.readAsDataURL(file);
		}
	};

	// Обработчик перехода к следующему шагу формы
	const handleNextStep = async () => {
		const isValid = await trigger();
		if (isValid) {
			setStep(2);
		}
	};

	const handleRemovePhoto = () => {
		// Удаляем фото из формы
		setValue("photo", "");
		setPhotoPreview(null);
	};

	return (
		<main className={st.formPage}>
			<form className={st.adForm}>
				<h1>{!isEditMode ? "Создайте " : "Отредактируйте "}объявление:</h1>
				{/* Первый шаг заполнения формы */}
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

						{/* Логика отображения фото */}
						{photoPreview ? (
							<div className={st.photoPreviewWrapper}>
								<div className={st.photoPreviewBlock}>
									<img src={photoPreview} alt="Preview" className={st.photoPreview} />
								</div>
								<PrimaryBtn action={handleRemovePhoto}>
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

				{/* Второй шаг заполнения формы */}
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
							<PrimaryBtn action={handleSubmit(onSubmit)}>
								<span className={st.btnTxt}> {isEditMode ? "Сохранить" : "Создать"}</span>
							</PrimaryBtn>
						</div>
					</>
				)}
			</form>
		</main>
	);
};

export default AdForm;
