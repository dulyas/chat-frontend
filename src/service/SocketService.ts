


import io, {Socket} from 'socket.io-client'
import { IUser } from '../models/IUser'
import { IUserDto } from '../models/IUserDto'

export const SOCKET_URL = 'ws://localhost:4422'

class SocketService {
    socket: Socket
    constructor() {
        this.socket = io(SOCKET_URL, {
            path: '/socket.io/',
            // withCredentials: true,
            // transports: ['websocket', 'pooling']
        })
    }

    connectUser(user: IUserDto) {
        this.socket.emit('connect-user', user)
    }
}

export default new SocketService()