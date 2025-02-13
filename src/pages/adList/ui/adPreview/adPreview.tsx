import st from "./adPreview.module.css";
import img from "../../../../shared/assets/icons/imagesTemplate.svg";
import PrimaryBtn from "../../../../shared/ui/primaryBtn/primaryBtn";
import {
	Ad,
	RealEstateDetails,
	AutoDetails,
	ServiceDetails,
} from "../../../../shared/types/adTypes";

const AdPreview = ({
	ad,
}: {
	ad: Ad<AutoDetails | RealEstateDetails | ServiceDetails>;
}) => {
	return (
		<article className={st.adCard}>
			<img className={st.adImg} src={img} alt="Изображение отсутствует" />
			<div className={st.adInfo}>
				<p className={st.boldTxt}>{ad.name}</p>
				<div className={st.adInfo}>
					<p className={st.regularTxt}>{ad.location}</p>
					<p className={st.smallTxt}>{ad.type}</p>
				</div>
				<div className={st.bottomBlock}>
					<PrimaryBtn>Редактировать</PrimaryBtn>
					<PrimaryBtn>Открыть</PrimaryBtn>
				</div>
			</div>
		</article>
	);
};

export default AdPreview;
