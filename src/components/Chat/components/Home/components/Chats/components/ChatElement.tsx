import { FC } from "react";
import { IChat } from "../../../../../../../models/IChat";
import style from './chat.module.scss'
import Ok from '../ok.svg'

interface ChatElementProps {
    chat: IChat,
    userId: string
}

const ChatElement: FC<ChatElementProps> = ({chat, userId}) => {
    return (
        <div 
        className={style.chat}
        key={chat.id}>
            <div className={style.left}>
                <img src={chat.avatarUrl} alt="avatar" />
            </div>
            <div className={style.right}>
                <div className={style.name}>
                    {chat.name}
                </div>
                <div className={style.message + ((chat.lastMessage.readed && ` ${style.readed}`) || '')}>
                    {chat.lastMessage.userId === userId && <Ok/>}
                    <div className={style.lastmessage}>
                        {chat.lastMessage.textMessage}
                    </div>
                </div>
                <div className={style.date}>
                    {new Date(chat.lastMessage.date).toLocaleTimeString().slice(0,-3)}
                </div>
            </div>
        </div>
    );
};

export default ChatElement;