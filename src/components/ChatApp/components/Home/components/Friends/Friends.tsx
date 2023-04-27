import { FC, useContext } from "react";
import { Context } from "../../../../../../main";
import { observer } from 'mobx-react-lite'
import style from './friends.module.scss'
import Friend from "./components/Friend/Friend";
import { TabComponentProps } from "../../Home";
import UserService from "../../../../../../service/UserService";


const Friends: FC<TabComponentProps> = ({searchString}) => {

    const {store} = useContext(Context)

    const deleteFriend = async (id: string) => {
        const deleteResult = await UserService.deleteFriend(store.user.id, id)
        delete store.user.friends?.[deleteResult.data.userId]
    }

    if (store.user.friends && Object.keys(store.user.friends).length) {
        return (
            <div className={style.friends}>
                {Object.values(store.user.friends).map(friend => 
                    <Friend key={friend.id} avatarUrl={friend.avatarUrl} name={friend.name} isOnline={friend.isOnline} roomId={friend.roomId} id={friend.id} deleteFriend={deleteFriend}/>
                )}
            </div>
        );
    }

    return (
        <div>
            There is no friends, add somebody!
        </div>
    )
};

export default observer(Friends);