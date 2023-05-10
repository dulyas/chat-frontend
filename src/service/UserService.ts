
import $api from "../http";
import {AxiosResponse} from 'axios'
import { IUser } from "../models/IUser";
import { IUserDto } from "../models/IUserDto";
import { IChat } from "../models/IChat";


interface DeleteFriendResponse {
    status: boolean,
    userId: string
}

interface AddFriendResponse {
    user: IUserDto
    conference: IChat
}

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get('user')
    }

    static findUsersByEmail(email: string): Promise<AxiosResponse<IUser[]>> {
        return $api.post('user/findByEmail', {email})
    }

    static addFriend(userId: string, friendId: string): Promise<AxiosResponse<AddFriendResponse>> {
        return $api.post('user/addFriend', {from: userId, to: friendId})
    }

    static getFriendListFromId(id: string): Promise<AxiosResponse<IUser[]>> {
        return $api.post('user/getFriendListFromId', {id})
    }

    static deleteFriend(userId: string, friendId: string): Promise<AxiosResponse<DeleteFriendResponse>> {
        return $api.post('user/deleteFriend', {
            userId,
            friendId
        })
    }

    static findFriendCandidatesForUserFromId(id: string, email: string) {
        return $api.post('user/findFriendCandidatesForUserFromId', {
            id,
            email
        })
    }

    static getUserById(id: string) {
        return $api.post('user/findOneById', {id})
    }

    static getAllUsersChats(id: string): Promise<AxiosResponse<IChat[]>> {
        return $api.post('user/getAllUsersChats', {id})
    }
 }