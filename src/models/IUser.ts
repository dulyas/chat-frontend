import { IChat } from "./IChat";
import { IFriend } from "./IFriend";

export interface IUser {
	_id: string;
	name: string;
	email: string;
	isActivated: boolean;
	avatarUrl: string;
	chats: IChat[];
	friends: IFriend;
	isOnline: boolean;
}
