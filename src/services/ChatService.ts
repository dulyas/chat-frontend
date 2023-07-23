import { AuthResponse } from "@/models/response/AuthResponse";
import $api from "@/http";
import { AxiosResponse } from "axios";
import { IRoom } from "@/models/IRoom";
import { IMessage } from "@/models/IMessage";

interface DeleteResultResponse {
	deleteResult: boolean;
}

export default class ChatService {
	static async delete(
		id: string,
	): Promise<AxiosResponse<DeleteResultResponse>> {
		return $api.post<DeleteResultResponse>("/conference/delete", { id });
	}

	static async getRoomDataById(id: string): Promise<AxiosResponse<IRoom>> {
		return $api.post<IRoom>("/conference/getRoomDataById", { id });
	}

	// static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
	//     return $api.post<AuthResponse>('/user/registration', {email, password})
	// }

	// static async logout(email: string): Promise<AxiosResponse<AuthResponse>> {
	//     return $api.post('/user/logout')
	// }
}
