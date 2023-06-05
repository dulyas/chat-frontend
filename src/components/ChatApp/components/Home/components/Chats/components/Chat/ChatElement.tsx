import { FC, MouseEvent, memo } from "react";
import { IChat } from "../../../../../../../../models/IChat";
import style from './chat.module.scss'
import Ok from './ok.svg'
import { useNavigate } from "react-router-dom";
import ChatService from "../../../../../../../../service/ChatService";

interface ChatElementProps {
    chat: IChat,
    userId: string,
    deleteFunction: (id: string) => void
}

const ChatElement: FC<ChatElementProps> = ({chat, userId, deleteFunction}) => {

    const navigate = useNavigate()

    const onClickDelete = async (e: MouseEvent) => {
        e.stopPropagation()
        const { deleteResult } = (await ChatService.delete(chat._id)).data
        if (deleteResult) deleteFunction(chat._id)
    }

    // console.log('render chat elem')
    return (
        <div 
        onClick={() => navigate(`/chat/${chat._id}`)}
        className={style.chat}
        key={chat._id}>
            <div className={style.left}>
                <img src={chat.avatarUrl} alt="avatar" />
            </div>
            <div className={style.right}>
                <div className={style.name}>
                    {chat.name}
                </div>
                {chat.lastMessage && <>
                        <div className={style.message + ((chat.lastMessage.readed && ` ${style.readed}`) || '')}>
                            {chat.lastMessage.userId === userId && <Ok/>}
                            <div className={style.lastmessage}>
                                {chat.lastMessage.textMessage}
                            </div>
                        </div>
                        <div className={style.date}>
                            {new Date(chat.lastMessage.date).toLocaleTimeString().slice(0,-3)}
                        </div>
                    </>}
                <div 
                onClick={onClickDelete}
                className={style.delete}>
                    X
                </div>
            </div>
        </div>
    );
};

export default memo(ChatElement);