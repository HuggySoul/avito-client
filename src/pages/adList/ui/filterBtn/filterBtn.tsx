import st from "./filterBtn.module.css";
import filterIcon from "../../../../shared/assets/icons/filter.svg";
import PrimaryBtn from "../../../../shared/ui/primaryBtn/primaryBtn";
import FilterMenu from "../filterMenu/filterMenu";
const FilterBtn = () => {
	return (
		<div className={st.filter}>
			<PrimaryBtn>
				<span className={st.filterTxt}>Фильтр</span>
				<img className={st.filterIcon} src={filterIcon} alt="Иконка фильтра" />
			</PrimaryBtn>
			<FilterMenu />
		</div>
	);
};

export default FilterBtn;
