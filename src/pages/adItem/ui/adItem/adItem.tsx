import st from "./adItem.module.css";
import { useParams } from "react-router-dom";
import { useGetAdByIdQuery } from "../../../../shared/api/adsApi";
import imageTemplate from "../../../../shared/assets/icons/imagesTemplate.svg";
import { isRealEstateAd, isAutoAd, isServiceAd } from "../../../../shared/utils";
import PrimaryBtn from "../../../../shared/ui/primaryBtn/primaryBtn";
import { useNavigate } from "react-router-dom";

const AdItem = () => {
	const { id } = useParams();
	const { data, error } = useGetAdByIdQuery(Number(id));
	const navigate = useNavigate();
	if (error) return <h1 className={st.error}>Ошибка загрузки объявления :\</h1>;

	const handleEdit = () => {
		if (!data) {
			console.log(error);
			return;
		}
		navigate(`/form/${data.id}`);
	};

	return (
		<main className={st.adPage}>
			<h1 className={st.adName}>{data?.name}</h1>
			<div className={st.adInfo}>
				<img className={st.adImg} src={imageTemplate} alt="Фото отсутствует" />
				<div className={st.txtBlock}>
					<p className={st.infoTitleTxt}>Подробная информация: </p>
					<p className={st.regularTxt}>
						<b>Описание:</b> {data?.description}
					</p>
					<p className={st.regularTxt}>
						<b>Локация:</b> {data?.location}
					</p>
					{isRealEstateAd(data) && (
						<>
							<p className={st.regularTxt}>
								<b>Тип недвижимости:</b> {data.propertyType}
							</p>
							<p className={st.regularTxt}>
								<b>Площадь:</b> {data.area} кв. м
							</p>
							<p className={st.regularTxt}>
								<b>Количество комнат: </b> {data.rooms}
							</p>
							<p className={st.regularTxt}>
								<b>Цена:</b> {data.price}
							</p>
						</>
					)}
					{isAutoAd(data) && (
						<>
							<p className={st.regularTxt}>
								<b>Марка:</b> {data.brand}
							</p>
							<p className={st.regularTxt}>
								<b>Модель:</b> {data.model}
							</p>
							{data.year && (
								<p className={st.regularTxt}>
									<b>Год выпуска:</b> {data.year}
								</p>
							)}
							{data.mileage && (
								<p className={st.regularTxt}>
									<b>Пробег:</b> {data.mileage} км
								</p>
							)}
						</>
					)}
					{isServiceAd(data) && (
						<>
							<p className={st.regularTxt}>
								<b>Тип услуги: </b> {data.serviceType}
							</p>
							<p className={st.regularTxt}>
								<b>Опыт работы: </b> {data.experience}
							</p>
							<p className={st.regularTxt}>
								<b>Стоимость: </b> {data.cost}
							</p>
							{data.workSchedule && (
								<p className={st.regularTxt}>
									<b>График работы: </b> {data.workSchedule}
								</p>
							)}
						</>
					)}
					<PrimaryBtn action={handleEdit}>
						<span className={st.btnTxt}>Редактировать</span>
					</PrimaryBtn>
				</div>
			</div>
		</main>
	);
};

export default AdItem;
