import { IMessage } from "./IMessage";

export interface IChat {
	_id: string;
	name: string;
	usersIds: string[];
	avatarUrl: string;
	lastMessage: IMessage;
	unreadMessageCount: number;
}
