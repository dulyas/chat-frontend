export interface IMessage {
    userId: string
    roomId: string
    readed: boolean
    edited: boolean
    date: Date | number
    textMessage: string
}