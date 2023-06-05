import { IUser } from "./IUser"


export interface IUserDto {
    id: string
    name: string
    avatarUrl: string
    isOnline: boolean
    email: string
    isActivated: boolean
}

export default class UserDto {
    email
    id
    isActivated
    avatarUrl
    name
    isOnline

    constructor(model: IUser) {
        this.email = model.email
        this.id = model.id
        this.isActivated = model.isActivated
        this.avatarUrl = model.avatarUrl
        this.name = model.name
        this.isOnline = model.isOnline
    }
}

