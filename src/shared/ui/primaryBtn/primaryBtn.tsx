import st from "./primaryBtn.module.css";

const PrimaryBtn = ({
	children,
	action,
	disabled,
}: {
	children: React.ReactNode;
	action?: React.MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
}) => {
	const setIsDisabled = () => {
		return typeof disabled !== "undefined" ? disabled : false;
	};
	return (
		<button disabled={setIsDisabled()} onClick={action} className={st.primaryBtn}>
			{children}
		</button>
	);
};

export default PrimaryBtn;
