import st from "./customTextArea.module.css";
import { useAutoResize } from "./useAutoResize";

interface ICustomTextArea {
	fontSize: number;
	maxHeight: number;
	defaultValue: string;
	fontWeight: number;
}

export const CustomTextArea: React.FC<ICustomTextArea> = ({
	fontSize,
	maxHeight,
	defaultValue,
	fontWeight,
}) => {
	const { value, handleChange, textAreaRef } = useAutoResize(defaultValue);

	const toTop = () => {
		if (textAreaRef.current) textAreaRef.current.scrollTop = 0;
	};

	return (
		<textarea
			style={{
				fontSize: `${fontSize}px`,
				maxHeight: `${maxHeight}%`,
				fontWeight: `${fontWeight}`,
			}}
			rows={1}
			ref={textAreaRef}
			defaultValue={value}
			onChange={handleChange}
			className={st.titleInput}
			onBlur={toTop}
		/>
	);
};
