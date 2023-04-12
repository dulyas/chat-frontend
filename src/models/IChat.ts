import { IMessage } from "./IMessage"


export interface IChat {
    id: string | number
    name: string
    usersIds: string[]
    avatarUrl: string
    lastMessage: IMessage
    unreadMessageCount: number 
}