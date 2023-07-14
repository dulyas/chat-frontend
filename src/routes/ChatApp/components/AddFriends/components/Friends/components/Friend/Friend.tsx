import { FC, memo } from "react";
import style from "./friend.module.scss";
import MessageIcon from "./message.svg";

interface FriendProps {
	avatarUrl: string;
	name: string;
	isOnline: boolean;
	id: string;
	addFunction: (id: string) => Promise<void>;
}

const Friend: FC<FriendProps> = ({
	avatarUrl,
	name,
	isOnline,
	id,
	addFunction,
}) => {
	return (
		<div className={style.friend}>
			<div className={style.avatar}>
				<img src={avatarUrl} alt="avatar" />
			</div>
			<div className={style.name + (isOnline ? " " + style.online : "")}>
				{name}
			</div>
			<div onClick={() => addFunction(id)} className={style.message}>
				+
			</div>
		</div>
	);
};

export default memo(Friend);
