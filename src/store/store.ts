
import { API_URL } from './../http/index';
import { AuthResponse } from './../models/response/AuthResponse';
import axios from "axios";
import { IUser } from "../models/IUser";
import { action, makeAutoObservable, makeObservable, observable } from "mobx";
import AuthService from "../service/AuthService";
import { IChat } from '../models/IChat';
import UserService from '../service/UserService';
import { IFriend } from '../models/IFriend';
import socketService from '../service/SocketService';
import UserDto from '../models/IUserDto';


const chats = [
    {
        id: '1',
        name: 'Sanya',
        usersIds: ['12345', "642b003ebc8eea4eb5fc43e0"],
        avatarUrl: '/images/ava1.png',
        lastMessage: {
            userId: "642b003ebc8eea4eb5fc43e0",
            roomId: '12345',
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
        usersIds: ["642b003ebc8eea4eb5fc43e0", '123456'],
        avatarUrl: '/images/ava2.png',
        lastMessage: {
            userId: "642b003ebc8eea4eb5fc43e0",
            roomId: '123456',
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
        avatarUrl: '/images/ava2.png',
        lastMessage: {
            userId: '32222',
            roomId: '12345',
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
        avatarUrl: '/images/ava2.png',
        lastMessage: {
            userId: '32222',
            roomId: '12345',
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
        avatarUrl: '/images/ava2.png',
        lastMessage: {
            userId: '32222',
            roomId: '12345',
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
        avatarUrl: '/images/ava2.png',
        lastMessage: {
            userId: '32222',
            roomId: '12345',
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
        avatarUrl: '/images/ava2.png',
        lastMessage: {
            userId: '32222',
            roomId: '12345',
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
        avatarUrl: '/images/ava2.png',
        lastMessage: {
            userId: '32222',
            roomId: '12345',
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
        avatarUrl: '/images/ava2.png',
        lastMessage: {
            userId: '32222',
            roomId: '12345',
            readed: false,
            edited: true,
            date: Date.now(),
            textMessage: 'hello retardSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS'
        },
        unreadMessageCount: 322
    },
    
]

const friends = {
    '12345': {
        id: '12345',
        name: "Sanya",
        avatarUrl: '/images/ava1.png',
        isOnline: false,
        roomId: '1'
    },
    '123456': {
        id: '123456',
        name: "Sanya2",
        avatarUrl: '/images/ava2.png',
        isOnline: true,
        roomId: '2'
    }
}



export default class Store {
    user = {} as IUser
    isAuth = false
    isLoading = true


    constructor() {
        // makeAutoObservable(this)
        makeObservable(this, {
            isLoading: observable,
            user: observable,
            setLoading: action,
            setAuth: action,
            setUser: action,
            login: action,
            logout: action,
            registration: action
        })
    }



    setLoading(status: boolean) {
        this.isLoading = status
    }


    setAuth(status: boolean) {
        this.isAuth = status
    }

    async setUser(user: IUser) {

        const friendsArr: IUser[] = (await UserService.getFriendListFromId(user._id)).data

        const friends: IFriend = {}

        for (const key in friendsArr) {
            friends[friendsArr[key]._id] = {
                _id: friendsArr[key]._id,
                name: friendsArr[key].name,
                avatarUrl: friendsArr[key].avatarUrl,
                isOnline: friendsArr[key].isOnline ?? true,
            }
        }

        const chats: IChat[] = (await UserService.getAllUsersChats(user._id)).data

        // console.log(friends)

        // console.log(chats);

        socketService.connectUser(new UserDto(user))

        this.user = {
            ...user,
            chats,
            friends
        }


    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)

     

            await this.setUser(response.data.user)

        } catch (error: any) {
            console.log(error.response?.data?.message || error)
        }
    }

    async registration(email: string, password: string) {
        try {
            const response = await AuthService.registration(email, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            await this.setUser(response.data.user)
        } catch (error: any) {
            console.log(error.response?.data?.message || error)
        }
    }

    async logout(email: string) {
        try {
            const response = await AuthService.logout(email)
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({} as IUser)
        } catch (error: any) {
            console.log(error.response?.data?.message || error)
        }
    }

    async checkAuth() {
        try {
            // this.setLoading(true)
            const response = await axios.get<AuthResponse>(`${API_URL}/user/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            await this.setUser(response.data.user)

        } catch (error: any) {
            console.log(error.response?.data?.message || error)
        } finally {
            this.setLoading(false)
        }
    }

}