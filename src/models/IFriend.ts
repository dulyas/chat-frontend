export interface IFriend {
    [id: string]: {
        id: string
        name: string
        avatarUrl: string
        isOnline: boolean
        roomId: string
    }
}