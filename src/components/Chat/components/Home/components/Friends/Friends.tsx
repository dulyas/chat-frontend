import { FC, useContext } from "react";
import { Context } from "../../../../../../main";
import { observer } from 'mobx-react-lite'
import style from './friends.module.scss'
import Friend from "./components/Friend/Friend";
import { TabComponentProps } from "../../Home";

const Friends: FC<TabComponentProps> = ({searchString}) => {

    const {store} = useContext(Context)

    if (store.user.friends && Object.keys(store.user.friends).length) {
        return (
            <div className={style.friends}>
                {Object.values(store.user.friends).map(friend => 
                    <Friend key={friend.id} avatarUrl={friend.avatarUrl} name={friend.name} isOnline={friend.isOnline}/>
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