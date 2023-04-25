
import $api from "../http";
import {AxiosResponse} from 'axios'
import { IUser } from "../models/IUser";

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get('user')
    }

    static findUsersByEmail(email: string): Promise<AxiosResponse<IUser[]>> {
        return $api.post('user/findByEmail', {email})
    }

    static addFriend(userId: string, friendId: string): Promise<AxiosResponse<IUser[]>> {
        return $api.post('user/addFriend', {from: userId, to: friendId})
    }

    static getFriendListFromId(id: string): Promise<AxiosResponse<IUser[]>> {
        return $api.post('user/getFriendListFromId', {id})
    }
 }