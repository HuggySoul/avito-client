import st from "./adPreview.module.css";
import img from "../../../../shared/assets/icons/imagesTemplate.svg";
import PrimaryBtn from "../../../../shared/ui/primaryBtn/primaryBtn";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router";

import {
	Ad,
	RealEstateDetails,
	AutoDetails,
	ServiceDetails,
} from "../../../../shared/types/adTypes";

// Компонент карточки объявления
const AdPreview = ({
	ad,
}: {
	ad: Ad<AutoDetails | RealEstateDetails | ServiceDetails>;
}) => {
	const navigate = useNavigate();

	const handleOpen = () => {
		navigate(`/item/${ad.id}`);
	};

	const handleEdit = () => {
		navigate(`/form/${ad.id}`);
	};

	return (
		<article className={st.adCard}>
			{ad.photo ? (
				<img className={st.adImg} src={ad.photo} alt="Изображение объявления" />
			) : (
				<img className={st.adImg} src={img} alt="Изображение отсутствует" />
			)}

			<div className={st.adInfo}>
				<NavLink to={`/item/${ad.id}`}>
					<p className={st.boldTxt}>{ad.name}</p>
				</NavLink>
				<div className={st.adInfo}>
					<p className={st.regularTxt}>{ad.location}</p>
					<p className={st.smallTxt}>{ad.type}</p>
				</div>
				<div className={st.bottomBlock}>
					<PrimaryBtn action={handleEdit}>Редактировать</PrimaryBtn>
					<PrimaryBtn action={handleOpen}>Открыть</PrimaryBtn>
				</div>
			</div>
		</article>
	);
};

export default AdPreview;
