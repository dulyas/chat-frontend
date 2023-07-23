import { FC, memo, useContext, useEffect, useState, useCallback } from "react";
import style from "./friends.module.scss";
import Friend from "./components/Friend/Friend";
import UserService from "@/services/UserService";
import { IUser } from "@/models/IUser";
import { Context } from "@/main";

import { observer } from "mobx-react-lite";

interface FriendsProps {
	searchString: string;
}

const FriendsCandidates: FC<FriendsProps> = ({ searchString }) => {
	const { store } = useContext(Context);
	const [loader, setLoader] = useState<boolean>(false);
	const [candidates, setCandidates] = useState<IUser[]>([]);

	const getCandidatesList = async (searchString: string) => {
		setLoader(true);

		const findedUsers = await UserService.findFriendCandidatesForUserFromId(
			store.user._id,
			searchString,
		);

		console.log(findedUsers);
		setCandidates(findedUsers.data);

		setLoader(false);
	};

	const addFriend = useCallback(async (id: string): Promise<void> => {
		setLoader(true);
		const { user: addedFriend, conference } = (
			await UserService.addFriend(store.user._id, id)
		).data;

		store.user.friends[id] = addedFriend;

		if (!store.user.chats.find((chat) => chat._id === conference._id)) {
			store.user.chats = [conference, ...store.user.chats];
		}

		setCandidates((prev) =>
			prev.filter((candidate) => candidate._id !== id),
		);
		setLoader(false);
	}, []);

	useEffect(() => {
		searchString && getCandidatesList(searchString);
		if (!searchString && candidates.length) setCandidates([]);
	}, [searchString]);

	if (loader) {
		return <div>Loading...</div>;
	}

	if (candidates?.length) {
		return (
			<div className={style.friends}>
				{candidates.map(
					(candidate) =>
						store.user._id !== candidate._id && (
							<Friend
								key={candidate._id}
								avatarUrl={candidate.avatarUrl}
								name={candidate.name ?? candidate.email}
								isOnline={candidate.isOnline ?? false}
								id={candidate._id}
								addFunction={addFriend}
							/>
						),
				)}
			</div>
		);
	}

	return <div>There is no friends, find somebody!</div>;
};

export default observer(FriendsCandidates);
