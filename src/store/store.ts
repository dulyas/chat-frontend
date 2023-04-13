import { API_URL } from './../http/index';
import { AuthResponse } from './../models/response/AuthResponse';
import axios from "axios";
import { IUser } from "../models/IUser";
import { makeAutoObservable } from "mobx";
import AuthService from "../service/AuthService";
import { IChat } from '../models/IChat';

const chats = [
    {
        id: '1',
        name: 'Sanya',
        usersIds: ['12345', "642b003ebc8eea4eb5fc43e0"],
        avatarUrl: './images/ava1.png',
        lastMessage: {
            userId: "642b003ebc8eea4eb5fc43e0",
            receiverId: '12345',
            readed: true,
            edited: false,
            date: Date.now(),
            textMessage: 'hello'
        },
        unreadMessageCount: 1
    },
    {
        id: '2',
        name: 'Sanya2',
        usersIds: ["642b003ebc8eea4eb5fc43e0", '12345'],
        avatarUrl: './images/ava2.png',
        lastMessage: {
            userId: "642b003ebc8eea4eb5fc43e0",
            receiverId: '12345',
            readed: false,
            edited: true,
            date: Date.now(),
            textMessage: 'hello retardSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS'
        },
        unreadMessageCount: 322
    },
    {
        id: '4',
        name: 'Sanya2',
        usersIds: ['32222', '12345'],
        avatarUrl: './images/ava2.png',
        lastMessage: {
            userId: '32222',
            receiverId: '12345',
            readed: false,
            edited: true,
            date: Date.now(),
            textMessage: 'hello retardSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS'
        },
        unreadMessageCount: 322
    },
    {
        id: '3',
        name: 'Sanya2',
        usersIds: ['32222', '12345'],
        avatarUrl: './images/ava2.png',
        lastMessage: {
            userId: '32222',
            receiverId: '12345',
            readed: false,
            edited: true,
            date: Date.now(),
            textMessage: 'hello retardSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS'
        },
        unreadMessageCount: 322
    },
    {
        id: '5',
        name: 'Sanya2',
        usersIds: ['32222', '12345'],
        avatarUrl: './images/ava2.png',
        lastMessage: {
            userId: '32222',
            receiverId: '12345',
            readed: false,
            edited: true,
            date: Date.now(),
            textMessage: 'hello retardSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS'
        },
        unreadMessageCount: 322
    },

    {
        id: '6',
        name: 'Sanya2',
        usersIds: ['32222', '12345'],
        avatarUrl: './images/ava2.png',
        lastMessage: {
            userId: '32222',
            receiverId: '12345',
            readed: false,
            edited: true,
            date: Date.now(),
            textMessage: 'hello retardSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS'
        },
        unreadMessageCount: 322
    },
    {
        id: '7',
        name: 'Sanya2',
        usersIds: ['32222', '12345'],
        avatarUrl: './images/ava2.png',
        lastMessage: {
            userId: '32222',
            receiverId: '12345',
            readed: false,
            edited: true,
            date: Date.now(),
            textMessage: 'hello retardSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS'
        },
        unreadMessageCount: 322
    },
    {
        id: '8',
        name: 'Sanya2',
        usersIds: ['32222', '12345'],
        avatarUrl: './images/ava2.png',
        lastMessage: {
            userId: '32222',
            receiverId: '12345',
            readed: false,
            edited: true,
            date: Date.now(),
            textMessage: 'hello retardSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS'
        },
        unreadMessageCount: 322
    },
    {
        id: '9',
        name: 'Sanya2',
        usersIds: ['32222', '12345'],
        avatarUrl: './images/ava2.png',
        lastMessage: {
            userId: '32222',
            receiverId: '12345',
            readed: false,
            edited: true,
            date: Date.now(),
            textMessage: 'hello retardSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS'
        },
        unreadMessageCount: 322
    },
    
]


export default class Store {
    user = {} as IUser
    isAuth = false
    isLoading = false
    isLoadingCheckAuth = false

    constructor() {
        makeAutoObservable(this)
    }



    setLoading(status: boolean) {
        this.isLoading = status
    }

    setLoadingCheckAuth(status: boolean) {
        this.isLoadingCheckAuth = status
    }

    setAuth(status: boolean) {
        this.isAuth = status
    }

    setUser(user: IUser) {
        this.user = {
            ...user,
            chats
        }
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)

        } catch (error: any) {
            console.log(error.response?.data?.message || error)
        }
    }

    async registration(email: string, password: string) {
        try {
            const response = await AuthService.registration(email, password)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (error: any) {
            console.log(error.response?.data?.message || error)
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({} as IUser)
        } catch (error: any) {
            console.log(error.response?.data?.message || error)
        }
    }

    async checkAuth() {
        try {
            this.setLoadingCheckAuth(true)
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)

        } catch (error: any) {
            console.log(error.response?.data?.message || error)
        } finally {
            this.setLoadingCheckAuth(false)
        }
    }

}