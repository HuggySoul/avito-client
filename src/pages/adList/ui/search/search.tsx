import st from "./search.module.css";
import { AdsResponse } from "../../../../shared/types";
import { useSearchAdsQuery } from "../../../../shared/api/adsApi";
import { useState, useEffect } from "react";
import loadingIcon from "../../../../shared/assets/icons/loading.svg";
import { Filter } from "../../../../shared/types";
interface IProps {
	setResult: React.Dispatch<React.SetStateAction<AdsResponse | undefined>>;
	query: string;
	setQuery: React.Dispatch<React.SetStateAction<string>>;
	currentPage: number;
	limit: number;
	filter: Filter | null;
	setTotal: React.Dispatch<React.SetStateAction<number>>;
}

const Search = ({
	setResult,
	query,
	setQuery,
	currentPage,
	limit,
	filter,
	setTotal,
}: IProps) => {
	const [debouncedQuery, setDebouncedQuery] = useState(query);
	const { data, isFetching, error } = useSearchAdsQuery(
		{
			adName: debouncedQuery,
			page: currentPage,
			limit: limit,
			adTypeFilter: filter?.adType,
		},
		{ skip: debouncedQuery.length < 3 }
	);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	// Обновляем список объявлений при изменении результатов поиска
	useEffect(() => {
		setResult(data?.items);
		setTotal(data?.total || 0);
	}, [data, setResult, setTotal, error]);

	// Дебаунсинг запроса
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedQuery(query);
		}, 500);

		return () => {
			clearTimeout(handler);
		};
	}, [query]);

	return (
		<div className={st.search}>
			<input
				value={query}
				onChange={handleChange}
				className={st.searchInput}
				placeholder="Поиск объявления по названию"
			/>
			{isFetching && (
				<img className={st.loadingIcon} src={loadingIcon} alt="Иконка загрузки" />
			)}
			{error && <p className={st.error}>Произошла ошибка поиска</p>}
		</div>
	);
};

export default Search;
