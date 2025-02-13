import st from "./filterBtn.module.css";
import filterIcon from "../../../../shared/assets/icons/filter.svg";
import PrimaryBtn from "../../../../shared/ui/primaryBtn/primaryBtn";
import FilterMenu from "../filterMenu/filterMenu";
import { useState } from "react";
const FilterBtn = () => {
	const [isActive, setIsActive] = useState(false);

	const togglePopup = () => {
		setIsActive((prev) => !prev);
	};
	return (
		<div className={st.filter}>
			<PrimaryBtn action={togglePopup}>
				<span className={st.filterTxt}>Фильтр</span>
				<img className={st.filterIcon} src={filterIcon} alt="Иконка фильтра" />
			</PrimaryBtn>
			{isActive && <FilterMenu setIsVisible={togglePopup} />}
		</div>
	);
};

export default FilterBtn;
