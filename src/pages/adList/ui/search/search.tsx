import st from "./search.module.css";
// import loadingIcon from "../../../../shared/assets/icons/loading.svg";
const Search = () => {
	return (
		<div className={st.search}>
			<input className={st.searchInput} placeholder="Поиск объявления по названию" />
			{/* <img className={st.loadingIcon} src={loadingIcon} alt="Иконка загрузки" /> */}
		</div>
	);
};

export default Search;
