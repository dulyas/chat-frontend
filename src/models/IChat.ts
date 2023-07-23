import { IMessage } from "@/models/IMessage";
import { IUser } from "./IUser";
import { IUserDto } from "./IUserDto";

export interface IChat {
	_id: string;
	users: string[];
	name: string;
	avatarUrl: string;
	lastMessage: IMessage;
	unreadMessageCount: number;
}
