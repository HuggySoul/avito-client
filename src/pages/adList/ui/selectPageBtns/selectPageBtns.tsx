import st from "./selectPageBtns.module.css";
import { AdsResponse } from "../../../../shared/types";
import PrimaryBtn from "../../../../shared/ui/primaryBtn/primaryBtn";

interface IProps {
	currentPage: number;
	increment: React.MouseEventHandler<HTMLButtonElement>;
	decrement: React.MouseEventHandler<HTMLButtonElement>;
	data:
		| {
				items: AdsResponse;
				total: number;
				page: number;
				totalPages: number;
		  }
		| undefined;
}

const SelectPageBtns = ({ currentPage, increment, decrement, data }: IProps) => {
	return (
		<div className={st.selectPageBtns}>
			<PrimaryBtn isActive={currentPage === 1} action={decrement}>
				← Назад
			</PrimaryBtn>
			<span className={st.currentPage}>
				Страница {currentPage} / {data?.totalPages}
			</span>
			<PrimaryBtn isActive={currentPage === data?.totalPages} action={increment}>
				Вперёд →
			</PrimaryBtn>
		</div>
	);
};

export default SelectPageBtns;
