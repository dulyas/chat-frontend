import { FC, MouseEvent } from "react";
import style from "./button.module.scss";
import { MouseEventHandler } from "react";

interface ButtonProps {
	text: string;
	click: ((event: MouseEvent) => void) | string;
}

const Button: FC<ButtonProps> = ({ text, click }) => {
	if (typeof click === "string") {
		return (
			<a className={style.button} href={click}>
				{text}
			</a>
		);
	}

	return (
		<button className={style.button} onClick={click}>
			{text}
		</button>
	);
};

export default Button;
