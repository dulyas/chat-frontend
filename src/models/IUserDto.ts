import { IUser } from "./IUser";

export interface IUserDto {
	_id: string;
	name: string;
	avatarUrl: string;
	isOnline: boolean;
	email: string;
	isActivated: boolean;
}

export default class UserDto {
	email;
	_id;
	isActivated;
	avatarUrl;
	name;
	isOnline;

	constructor(model: IUser) {
		this.email = model.email;
		this._id = model._id;
		this.isActivated = model.isActivated;
		this.avatarUrl = model.avatarUrl;
		this.name = model.name;
		this.isOnline = model.isOnline;
	}
}
