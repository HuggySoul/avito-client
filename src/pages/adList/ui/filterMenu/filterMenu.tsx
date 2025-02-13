import st from "./filterMenu.module.css";
import PrimaryBtn from "../../../../shared/ui/primaryBtn/primaryBtn";
import { AD_CATEGORIES } from "../../../../shared/model";
import closeIcon from "../../../../shared/assets/icons/close.svg";
const FilterMenu = () => {
	return (
		<dialog className={st.filterMenu}>
			<div className={st.menuHeader}>
				<span className={st.title}>Фильтр</span>
				<button className={st.closeBtn}>
					<img className={st.closeIcon} src={closeIcon} alt="Закрыть окно" />
				</button>
			</div>
			<div className={st.filterCond}>
				<label className={st.labelTxt} htmlFor="category">
					Категория
				</label>
				<select id="category">
					{AD_CATEGORIES.map((ad, i) => (
						<option value={ad} key={i}>
							{ad}
						</option>
					))}
				</select>
			</div>
			<div className={st.submitBtns}>
				<PrimaryBtn>
					<span>Отменить фильтры</span>
				</PrimaryBtn>
				<PrimaryBtn>
					<span>Применить</span>
				</PrimaryBtn>
			</div>
		</dialog>
	);
};

export default FilterMenu;
