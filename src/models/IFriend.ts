export interface IFriend {
    [id: string | number]: {
        id: string | number
        name: string
        avatarUrl: string
        isOnline: boolean
        roomId: string
    }
}