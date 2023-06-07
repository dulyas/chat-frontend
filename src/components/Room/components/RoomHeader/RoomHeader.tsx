
import { FC, memo, useContext } from 'react';
import style from './roomheader.module.scss'
import BackIcon from './svg/back.svg'
import { Context } from '../../../../main';
import { IFriend } from '../../../../models/IFriend';
import { useNavigate } from 'react-router-dom';
import { IUserDto } from '../../../../models/IUserDto';


interface RoomHeaderProps {
    avatarUrl: string
    name: string
    users: IUserDto[]
}

const calcRoomNameAndAvatar = (name: string, users: IFriend, avatarUrl: string, userId: string) : {
    roomName: string
    roomAvatarUrl: string
    isOnline: boolean
} => {

    let roomName: string = ''
    let roomAvatarUrl: string = ''

    if (name) {
        roomName = name
    } else if (Object.keys(users).length === 2) {
        const friendId: string = Object.keys(users).find(id => id !== userId) as string
        roomName = users[friendId].name 
    } else roomName = 'Room Name'

    if (avatarUrl) {
        roomAvatarUrl = avatarUrl
    } else if (Object.keys(users).length === 2) {
        const friendId: string = Object.keys(users).find(id => id !== userId) as string
        roomAvatarUrl = users[friendId].avatarUrl
    } else roomAvatarUrl = 'Room Avatar Url Path'

    const isOnline: boolean = !!Object.values(users).find(user => (user.id !== userId) && user.isOnline)

    return {
        roomName,
        roomAvatarUrl,
        isOnline
    }
}



const RoomHeader: FC<RoomHeaderProps> = ({avatarUrl, name, users}) => {

    const {store} = useContext(Context)
    const navigate = useNavigate()

    const {
        roomName,
        roomAvatarUrl,
        isOnline
    } = calcRoomNameAndAvatar(name, users, avatarUrl, store.user.id)

    return (
        <div className={style.header}>
            <div 
            className={style.left}
            onClick={() => navigate('/chat')}>
                <BackIcon />
            </div>
            <div className={style.right}>
                <div className={style.avatar}>
                    <img src={roomAvatarUrl} alt="avatar" />
                </div>
                <div className={style.info}>
                    <div className={style.name}>
                        {roomName}
                    </div>
                    <div className={style.status + ((isOnline && ` ${style.online}`) || '')}>
                        {isOnline ? 'Online' : 'Offline'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(RoomHeader);