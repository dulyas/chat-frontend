import { IMessage } from "./IMessage"


export interface IChat {
    id: string
    name: string
    usersIds: string[]
    avatarUrl: string
    lastMessage: IMessage
    unreadMessageCount: number 
}