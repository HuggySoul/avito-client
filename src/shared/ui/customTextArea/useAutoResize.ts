"use client";
import { useRef, useState, useEffect, useCallback } from "react";

// управление состоянием и автоизменение высоты textarea
export const useAutoResize = (
	initialValue: string,
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
) => {
	const [value, setValue] = useState(initialValue);
	const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

	useEffect(() => {
		const textarea = textAreaRef.current;
		if (textarea) {
			textarea.style.height = "auto";
			textarea.style.height = `${textarea.scrollHeight}px`;
		}
	}, [value]);

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement>) => {
			setValue(e.target.value);
			if (onChange) {
				onChange(e); // Вызов внешнего обработчика onChange, если он передан
			}
		},
		[onChange]
	);

	return { value, handleChange, textAreaRef };
};
