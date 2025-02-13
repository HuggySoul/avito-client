import AdPreview from "../adPreview/adPreview";
import {
	Ad,
	RealEstateDetails,
	AutoDetails,
	ServiceDetails,
} from "../../../../shared/types/adTypes";
import st from "./adList.module.css";
import Search from "../search/search";
import FilterBtn from "../filterBtn/filterBtn";
import PrimaryBtn from "../../../../shared/ui/primaryBtn/primaryBtn";
const Ads: Ad<RealEstateDetails | AutoDetails | ServiceDetails>[] = [
	{
		id: 3,
		name: "Квартира в центре",
		description: "Просторная квартира в центре города",
		location: "Москва",
		type: "Недвижимость",
		propertyType: "Квартира",
		area: 100,
		rooms: 3,
		price: 15000000,
	},
	{
		id: 1,
		name: "Toyota Camry",
		description: "Надежный автомобиль",
		location: "Москва",
		type: "Авто",
		brand: "Toyota",
		model: "Camry",
		year: 2020,
		mileage: 15000,
	},
	{
		id: 2,
		name: "Ремонт квартир",
		description: "Качественный ремонт квартир",
		location: "Москва",
		type: "Услуги",
		serviceType: "Ремонт",
		experience: 5,
		cost: 50000,
		workSchedule: "Пн-Пт, 9:00-18:00",
	},
];

const AdList = () => {
	return (
		<main className={st.main}>
			<header className={st.adListHeader}>
				<Search />
				<FilterBtn />
			</header>
			<PrimaryBtn>Разместить объявление</PrimaryBtn>
			<div className={st.adList}>
				{Ads.map((ad) => (
					<AdPreview ad={ad} key={ad.id} />
				))}
			</div>
		</main>
	);
};

export default AdList;
