import { IFriend } from "./IFriend"
import { IUser } from "./IUser"
import { IUserDto } from "./IUserDto"

export interface IRoom {
    avatarUrl: string
    users: IUserDto[]
    name: string
    _id: string
}