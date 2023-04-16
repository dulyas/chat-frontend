import { FC, memo, useContext } from "react";
import { IMessage } from "../../../../../../models/IMessage";
import style from './message.module.scss'
import { Context } from "../../../../../../main";

interface MessageProps {
    message: IMessage
}

const Message: FC<MessageProps> = ({message}) => {

    const { store } = useContext(Context)

    return (
        <div className={style.message + (store.user.id === message.userId ? ` ${style.my}` : '')}>
            {message.textMessage}
        </div>
    );
};

export default memo(Message);