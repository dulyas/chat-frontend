import { FC } from "react";
import { IMessage } from "../../../../models/IMessage";
import Message from "./components/Message/Message";
import style from "./messages.module.scss";

interface MessagesProps {
	messages: IMessage[];
}

const Messages: FC<MessagesProps> = ({ messages }) => {
	return (
		<div className={style.messages}>
			{messages.map((message) => (
				<Message key={message._id} message={message} />
			))}
		</div>
	);
};

export default Messages;
