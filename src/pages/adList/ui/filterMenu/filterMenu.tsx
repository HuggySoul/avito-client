import st from "./filterMenu.module.css";
import PrimaryBtn from "../../../../shared/ui/primaryBtn/primaryBtn";
import { AD_CATEGORIES } from "../../../../shared/model";
import closeIcon from "../../../../shared/assets/icons/close.svg";
import { Filter } from "../../../../shared/types";
import { useState } from "react";

interface IProps {
	toggleIsVisible: () => void;
	setActiveFilter: React.Dispatch<React.SetStateAction<Filter | null>>;
}
const FilterMenu = ({ toggleIsVisible, setActiveFilter }: IProps) => {
	const [category, setCategory] = useState<string>(AD_CATEGORIES[0]);

	const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setCategory(e.target.value);
	};

	const submitHandler = () => {
		setActiveFilter({ adType: category });
		toggleIsVisible();
	};

	const disableFilters = () => {
		setActiveFilter(null);
		toggleIsVisible();
	};

	return (
		<dialog className={st.filterMenu}>
			<div className={st.menuHeader}>
				<span className={st.title}>Фильтр</span>
				<button onClick={toggleIsVisible} className={st.closeBtn}>
					<img className={st.closeIcon} src={closeIcon} alt="Закрыть окно" />
				</button>
			</div>
			<div className={st.filterCond}>
				<label className={st.labelTxt} htmlFor="category">
					Категория
				</label>
				<select onChange={selectHandler} className={st.categorySelector} id="category">
					{AD_CATEGORIES.map((ad, i) => (
						<option value={ad} key={i}>
							{ad}
						</option>
					))}
				</select>
			</div>
			<div className={st.submitBtns}>
				<PrimaryBtn action={disableFilters}>
					<span>Отменить фильтры</span>
				</PrimaryBtn>
				<PrimaryBtn action={submitHandler}>
					<span>Применить</span>
				</PrimaryBtn>
			</div>
		</dialog>
	);
};

export default FilterMenu;
