import { IChat } from "./IChat"


export interface IUser {
    email: string
    isActivated: boolean
    id: string
    chats: IChat[]
}