export interface IFriend {
	[_id: string]: {
		_id: string;
		name: string;
		avatarUrl: string;
		isOnline: boolean;
		email: string;
		// roomId: string
	};
}
