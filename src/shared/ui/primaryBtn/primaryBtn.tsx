import st from "./primaryBtn.module.css";

const PrimaryBtn = ({ children }: { children: React.ReactNode }) => {
	return <button className={st.primaryBtn}>{children}</button>;
};

export default PrimaryBtn;
