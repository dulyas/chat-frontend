import { IFriend } from "@/models/IFriend";
import { IUser } from "@/models/IUser";
import { IUserDto } from "@/models/IUserDto";

export interface IRoom {
	avatarUrl: string;
	users: IUserDto[];
	name: string;
	_id: string;
}
