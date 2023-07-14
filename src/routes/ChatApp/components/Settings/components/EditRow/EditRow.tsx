import React, { FC, MouseEvent, memo } from "react";
import style from "./editrow.module.scss";

import useStopPropagation from "../../../../../../hooks/useStopPropagation";
import { useRef } from "react";

interface EditRowProps {
	setShowButton: (status: boolean) => void;
	placeholder: string;
	showButton: boolean;
	editValueFunction: (newValue: string | undefined) => void;
}

const EditRow: FC<EditRowProps> = ({
	setShowButton,
	placeholder,
	showButton,
	editValueFunction,
}) => {
	const input = useRef<HTMLInputElement | null>(null);

	return (
		<div onClick={useStopPropagation} className={style.name}>
			Name:
			<input
				onFocus={() => setShowButton(true)}
				ref={input}
				placeholder={placeholder}
				type="text"
			/>
			{showButton && (
				<button onClick={() => editValueFunction(input.current?.value)}>
					Edit
				</button>
			)}
		</div>
	);
};

export default memo(EditRow);
