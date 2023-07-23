import { FC, memo } from "react";
import style from "./friend.module.scss";
import MessageIcon from "./message.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "@/main";

interface FriendProps {
	avatarUrl: string;
	name: string;
	isOnline: boolean;
	id: string;
	deleteFriend: (id: string) => void;
}

const Friend: FC<FriendProps> = ({
	avatarUrl,
	name,
	isOnline,
	id,
	deleteFriend,
}) => {
	const navigate = useNavigate();

	const { store } = useContext(Context);

	const goToRoom = () => {
		const roomId = store.user.chats.find((chat) => {
			return (
				chat.users?.length === 2 &&
				chat.users.includes(store.user._id) &&
				chat.users.includes(id)
			);
		})?._id;
		if (!roomId) return console.log("no room for this users");
		navigate(`/chat/${roomId}`);
	};

	return (
		<div className={style.friend}>
			<div className={style.avatar}>
				<img src={avatarUrl} alt="avatar" />
			</div>
			<div className={style.name + (isOnline ? " " + style.online : "")}>
				{name}
			</div>
			<div onClick={() => deleteFriend(id)} className={style.delete}>
				DEL
			</div>
			{/* onClick={() => navigate(`/chat/${roomId}`)}  */}
			<div onClick={goToRoom} className={style.message}>
				<MessageIcon />
			</div>
		</div>
	);
};

export default memo(Friend);
