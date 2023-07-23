import $api from "@/http";
import { AxiosResponse } from "axios";
import { IMessage } from "@/models/IMessage";

export default class MessageService {
	static async getMessagesForConferenceFromId(
		id: string,
	): Promise<AxiosResponse<{ messages: IMessage[] }>> {
		return $api.post<{ messages: IMessage[] }>(
			"/message/getMessagesForConferenceFromId",
			{ roomId: id },
		);
	}

	// static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
	//     return $api.post<AuthResponse>('/user/registration', {email, password})
	// }

	// static async logout(email: string): Promise<AxiosResponse<AuthResponse>> {
	//     return $api.post('/user/logout')
	// }
}
