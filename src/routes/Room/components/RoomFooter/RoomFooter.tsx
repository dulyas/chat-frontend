import { FC, MouseEvent, useRef, useState } from "react";
import style from "./roomfooter.module.scss";
import SendIcon from "./svg/send.svg";
import { memo } from "react";

interface RoomFooterProps {
	onClickSend: (message: string | undefined) => void;
}

const RoomFooter: FC<RoomFooterProps> = ({ onClickSend }) => {
	const input = useRef<HTMLInputElement | null>(null);

	const [messageString, setMessageString] = useState<string>("");

	return (
		<div className={style.footer}>
			<input ref={input} placeholder="Type here..." type="text" />
			<div className={style.icons}>
				<div
					onClick={() => onClickSend(input.current?.value)}
					className={style.icon}
				>
					<SendIcon />
				</div>
			</div>
		</div>
	);
};

export default memo(RoomFooter);
