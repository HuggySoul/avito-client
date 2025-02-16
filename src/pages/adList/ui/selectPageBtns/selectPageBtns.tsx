import st from "./selectPageBtns.module.css";
import PrimaryBtn from "../../../../shared/ui/primaryBtn/primaryBtn";

interface IProps {
	currentPage: number;
	increment: React.MouseEventHandler<HTMLButtonElement>;
	decrement: React.MouseEventHandler<HTMLButtonElement>;
	limit: number;
	total: number;
}

//кнопки перехода на новую страницу с объявлениями
const SelectPageBtns = ({ currentPage, increment, decrement, limit, total }: IProps) => {
	const totalPages = Math.ceil(total / limit);
	return (
		<div className={st.selectPageBtns}>
			<PrimaryBtn disabled={currentPage === 1} action={decrement}>
				← Назад
			</PrimaryBtn>
			<span className={st.currentPage}>
				Страница {currentPage} / {totalPages}
			</span>
			<PrimaryBtn disabled={currentPage === totalPages} action={increment}>
				Вперёд →
			</PrimaryBtn>
		</div>
	);
};

export default SelectPageBtns;
