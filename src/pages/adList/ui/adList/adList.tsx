import AdPreview from "../adPreview/adPreview";
import { useGetAdsQuery } from "../../../../shared/api/adsApi";
import st from "./adList.module.css";
import Search from "../search/search";
import FilterBtn from "../filterBtn/filterBtn";
import PrimaryBtn from "../../../../shared/ui/primaryBtn/primaryBtn";
import { useState } from "react";
import SelectPageBtns from "../selectPageBtns/selectPageBtns";
import loadingIcon from "../../../../shared/assets/icons/loading.svg";

const ITEMS_PER_PAGE = 5;

const AdList = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const { data, error, isLoading } = useGetAdsQuery({
		page: currentPage,
		limit: ITEMS_PER_PAGE,
	});

	return (
		<main className={st.main}>
			<header className={st.adListHeader}>
				<Search />
				<FilterBtn />
			</header>
			<PrimaryBtn>Разместить объявление</PrimaryBtn>

			{!isLoading && !error ? (
				<div className={st.adList}>
					{data?.items?.map((ad) => (
						<AdPreview ad={ad} key={ad.id} />
					))}
				</div>
			) : (
				(!error && <img className={st.loading} src={loadingIcon} alt="Загрузка" />) || (
					<p className={st.error}>Ошибка загрузки объявлений :\</p>
				)
			)}

			<SelectPageBtns
				currentPage={currentPage}
				increment={() => setCurrentPage((prev) => prev + 1)}
				decrement={() => setCurrentPage((prev) => prev - 1)}
				data={data}
			/>
		</main>
	);
};

export default AdList;
