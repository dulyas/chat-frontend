export interface IMessage {
    userId: string
    receiverId: string
    readed: boolean
    edited: boolean
    date: Date | number
    textMessage: string
}