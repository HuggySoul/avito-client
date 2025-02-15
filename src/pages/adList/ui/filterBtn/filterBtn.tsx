import st from "./filterBtn.module.css";
import filterIcon from "../../../../shared/assets/icons/filter.svg";
import PrimaryBtn from "../../../../shared/ui/primaryBtn/primaryBtn";
import FilterMenu from "../filterMenu/filterMenu";
import { useState } from "react";
import { Filter } from "../../../../shared/types";

interface IProps {
	setActiveFilter: React.Dispatch<React.SetStateAction<Filter | null>>;
}
const FilterBtn = ({ setActiveFilter }: IProps) => {
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
			{isActive && (
				<FilterMenu setActiveFilter={setActiveFilter} toggleIsVisible={togglePopup} />
			)}
		</div>
	);
};

export default FilterBtn;
