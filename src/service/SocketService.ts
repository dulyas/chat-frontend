import io, { Socket } from "socket.io-client";
import { IUser } from "../models/IUser";
import { IUserDto } from "../models/IUserDto";

export const SOCKET_URL = "ws://localhost:4422";

class SocketService {
	_socket: Socket;
	constructor() {
		this._socket = io(SOCKET_URL, {
			path: "/socket.io/",
			// withCredentials: true,
			// transports: ['websocket', 'pooling']
		});
	}

	connectUser(user: IUserDto) {
		this._socket.emit("connect-user", user);
	}

	connectRoom(roomId: string) {
		this._socket.emit("connect-room", roomId);
	}

	get socket() {
		return this._socket;
	}

	sendMessage(roomId: string, userId: string, textMessage: string) {
		this._socket.emit("new-message", roomId, userId, textMessage);
	}
}

const socketService = new SocketService();

export default socketService;
