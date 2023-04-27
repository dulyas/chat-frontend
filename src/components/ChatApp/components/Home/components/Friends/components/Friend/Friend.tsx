import { FC, memo } from "react";
import style from './friend.module.scss'
import MessageIcon from './message.svg'
import { useNavigate } from "react-router-dom";

interface FriendProps {
    avatarUrl: string
    name: string
    isOnline: boolean
    roomId: string
    id: string
    deleteFriend: (id: string) => void
}

const Friend: FC<FriendProps> = ({avatarUrl, name, isOnline, roomId, id, deleteFriend}) => {

    const navigate = useNavigate()

    return (
        <div className={style.friend} >
            <div className={style.avatar}>
                <img src={avatarUrl} alt="avatar" />
            </div>
            <div className={style.name + (isOnline ? (' ' + style.online) : '')}>
                {name}
            </div>
            <div 
            onClick={() => deleteFriend(id)}
            className={style.delete}>
                DELETE
            </div>
            <div 
            onClick={() => navigate(`/chat/${roomId}`)} 
            className={style.message}>
                <MessageIcon />
            </div>
        </div>
    );
};

export default memo(Friend);