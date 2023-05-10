import { IFriend } from "./IFriend"
// import { IUser } from "./IUser"

export interface IRoom {
    avatarUrl: string
    users: IFriend
    name: string
    _id: string
}