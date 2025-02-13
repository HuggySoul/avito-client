import st from "./primaryBtn.module.css";

const PrimaryBtn = ({
	children,
	action,
	isActive,
}: {
	children: React.ReactNode;
	action?: React.MouseEventHandler<HTMLButtonElement>;
	isActive?: boolean;
}) => {
	const setIsDisabled = () => {
		return typeof isActive !== "undefined" ? isActive : false;
	};
	return (
		<button disabled={setIsDisabled()} onClick={action} className={st.primaryBtn}>
			{children}
		</button>
	);
};

export default PrimaryBtn;
