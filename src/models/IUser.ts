import { IChat } from "./IChat"
import { IFriend } from "./IFriend"

export interface IUser {
    email: string
    isActivated: boolean
    id: string
    chats: IChat[]
    friends: IFriend
}