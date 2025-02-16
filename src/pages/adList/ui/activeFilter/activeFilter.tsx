import st from "./activeFilter.module.css";
import { Filter } from "../../../../shared/types";
import closeIcon from "../../../../shared/assets/icons/close.svg";

interface IProps {
	setActiveFilter: React.Dispatch<React.SetStateAction<Filter | null>>;
	activeFilter: Filter;
}

// Отображение активного фильтра
const ActiveFilter = ({ activeFilter, setActiveFilter }: IProps) => {
	return (
		<div className={st.activeFilter}>
			{activeFilter.adType}
			<button onClick={() => setActiveFilter(null)} className={st.closeActiveFilterBtn}>
				<img
					src={closeIcon}
					className={st.closeIcon}
					onClick={() => setActiveFilter(null)}
					title="Убрать фильтр"
					alt=""
				/>
			</button>
		</div>
	);
};

export default ActiveFilter;
