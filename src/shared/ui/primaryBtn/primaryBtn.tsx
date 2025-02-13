import st from "./primaryBtn.module.css";

const PrimaryBtn = ({
	children,
	action,
}: {
	children: React.ReactNode;
	action?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
	return (
		<button onClick={action} className={st.primaryBtn}>
			{children}
		</button>
	);
};

export default PrimaryBtn;
