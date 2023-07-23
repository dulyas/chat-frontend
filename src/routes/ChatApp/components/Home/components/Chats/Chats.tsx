import { observer } from "mobx-react-lite";
import { useContext, FC, useEffect, useCallback } from "react";
import { Context } from "../../../../../../main";
import style from "./chats.module.scss";
import ChatElement from "./components/Chat/ChatElement";
import { TabComponentProps } from "../../Home";

const Chats: FC<TabComponentProps> = ({ searchString }) => {
	const { store } = useContext(Context);

	const deleteFunction = useCallback((id: string) => {
		store.user.chats = store.user.chats.filter((chat) => chat._id !== id);
	}, []);

	if (store?.user?.chats?.length) {
		return (
			<div className={style.chats}>
				{store.user.chats.map((chat) => (
					<ChatElement
						key={chat._id}
						chat={chat}
						userId={store.user._id}
						deleteFunction={deleteFunction}
					/>
				))}
			</div>
		);
	}
	return <div>There is no chats, try to chat friends!</div>;
};

export default observer(Chats);
