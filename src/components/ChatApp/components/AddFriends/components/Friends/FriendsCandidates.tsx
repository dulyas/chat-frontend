import { FC, memo, useContext, useEffect, useState } from "react";
import style from './friends.module.scss'
import Friend from "./components/Friend/Friend";
import UserService from "../../../../../../service/UserService";
import { IUser } from "../../../../../../models/IUser";
import { Context } from "../../../../../../main";

import { observer } from "mobx-react-lite";

interface FriendsProps {
    searchString: string
}

const FriendsCandidates: FC<FriendsProps> = ({searchString}) => {

    const { store } = useContext(Context)
    const [loader, setLoader] = useState<boolean>(false)
    const [candidates, setCandidates] = useState<IUser[]>([])

    const getCandidatesList = async (searchString: string) => {
        setLoader(true)

        const findedUsers = await UserService.findFriendCandidatesForUserFromId(store.user.id, searchString)
        setCandidates(findedUsers.data)

        setLoader(false)
    }

    const addFriend = async (id: string): Promise<void> => {
        setLoader(true)
        const contract = await UserService.addFriend(store.user.id, id)
        console.log(contract)
        setLoader(false)
    }

    useEffect(() => {
        searchString && getCandidatesList(searchString)
        if (!searchString && candidates.length) setCandidates([])
    }, [searchString])

    if (loader) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    if (candidates?.length) {
        return (
            <div className={style.friends}>
                {candidates.map(candidate => 
                    store.user.id !== candidate.id &&
                    <Friend key={candidate.id} avatarUrl={candidate.avatarUrl} name={candidate.name ?? candidate.email} isOnline={candidate.isOnline ?? false} id={candidate.id} addFunction={addFriend}/>
                )}
            </div>
        );
    }

    return (
        <div>
            There is no friends, find somebody!
        </div>
    )
};

export default observer(FriendsCandidates);