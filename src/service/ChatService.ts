import { AuthResponse } from './../models/response/AuthResponse';
import $api from "../http";
import {AxiosResponse} from 'axios'


interface DeleteResultResponse {
    deleteResult: boolean
}

export default class ChatService {
    static async delete(id: string): Promise<AxiosResponse<DeleteResultResponse>> {
        return $api.post<DeleteResultResponse>('/conference/delete', {id})
    }

    // static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    //     return $api.post<AuthResponse>('/user/registration', {email, password})
    // }

    // static async logout(email: string): Promise<AxiosResponse<AuthResponse>> {
    //     return $api.post('/user/logout')
    // }
}