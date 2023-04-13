import { FC } from "react";
import style from './friend.module.scss'

interface FriendProps {
    avatarUrl: string
    name: string
    isOnline: boolean
}

const Friend: FC<FriendProps> = ({avatarUrl, name, isOnline}) => {
    return (
        <div className={style.friend} >
            <div className={style.avatar}>
                <img src={avatarUrl} alt="avatar" />
            </div>
            <div className={style.name}>
                {name}
            </div>
        </div>
    );
};

export default Friend;