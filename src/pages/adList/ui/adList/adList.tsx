import { useEffect, useState } from "react";
import AdPreview from "../adPreview/adPreview";
import { useGetAdsQuery } from "../../../../shared/api/adsApi";
import st from "./adList.module.css";
import Search from "../search/search";
import FilterBtn from "../filterBtn/filterBtn";
import PrimaryBtn from "../../../../shared/ui/primaryBtn/primaryBtn";
import SelectPageBtns from "../selectPageBtns/selectPageBtns";
import loadingIcon from "../../../../shared/assets/icons/loading.svg";
import { AdsResponse } from "../../../../shared/types";
import { Filter } from "../../../../shared/types";
import { useNavigate } from "react-router-dom";
import ActiveFilter from "../activeFilter/activeFilter";

const ITEMS_PER_PAGE = 5;

const AdList = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchResults, setSearchResults] = useState<AdsResponse | undefined>(undefined);
	const [searchQuery, setSearchQuery] = useState("");
	const [activeFilter, setActiveFilter] = useState<Filter | null>(null);
	const [totalAdsQuantity, setTotalAdsQuantity] = useState(0);

	const { data, error, isLoading } = useGetAdsQuery({
		page: currentPage,
		limit: ITEMS_PER_PAGE,
		adTypeFilter: activeFilter?.adType,
	});

	useEffect(() => {
		setTotalAdsQuantity(data?.total || 0);
	}, [data?.total]);

	useEffect(() => {
		// чтобы избежать ошибок при поиске и фильтрации не на первой странице
		setCurrentPage(1);
	}, [totalAdsQuantity]);

	const navigate = useNavigate();
	const handleCreateAd = () => {
		navigate("/form");
	};

	// Если строка поиска короткая, показываем все объявления, иначе — результаты поиска
	const adsToDisplay = searchQuery.length < 3 ? data?.items : searchResults;

	return (
		<main className={st.main}>
			<header className={st.adListHeader}>
				<Search
					query={searchQuery}
					setQuery={setSearchQuery}
					setResult={setSearchResults}
					currentPage={currentPage}
					filter={activeFilter}
					limit={ITEMS_PER_PAGE}
					setTotal={setTotalAdsQuantity}
				/>
				<FilterBtn setActiveFilter={setActiveFilter} />
			</header>
			<div className={st.topBtns}>
				<PrimaryBtn action={handleCreateAd}>Разместить объявление</PrimaryBtn>
				{activeFilter && (
					<ActiveFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
				)}
			</div>

			{/* Состояние загрузки */}
			{isLoading && <img className={st.loading} src={loadingIcon} alt="Загрузка" />}

			{/* Ошибка загрузки объявлений */}
			{error && <p className={st.error}>Ошибка загрузки объявлений :\</p>}

			{/* Вывод списка объявлений или сообщение об отсутствии результатов */}
			{!isLoading && !error && (
				<div className={st.adList}>
					{adsToDisplay && adsToDisplay.length > 0 ? (
						adsToDisplay.map((ad) => <AdPreview ad={ad} key={ad.id} />)
					) : (
						<p className={st.error}>Объявлений не найдено</p>
					)}
				</div>
			)}

			{totalAdsQuantity > 5 && (
				<SelectPageBtns
					currentPage={currentPage}
					limit={ITEMS_PER_PAGE}
					increment={() => setCurrentPage((prev) => prev + 1)}
					decrement={() => setCurrentPage((prev) => prev - 1)}
					total={totalAdsQuantity}
				/>
			)}
		</main>
	);
};

export default AdList;
