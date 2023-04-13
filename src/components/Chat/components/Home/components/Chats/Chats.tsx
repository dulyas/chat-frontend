
import { observer } from 'mobx-react-lite'
import { useContext, FC } from 'react';
import { Context } from '../../../../../../main';
import style from './chats.module.scss'
import ChatElement from './components/Chat/ChatElement';

const Chats: FC = () => {

    const {store} = useContext(Context)
    if (store?.user?.chats?.length) {
        return (
            <div className={style.chats}>
                {store.user.chats.map(chat => 
                    <ChatElement key={chat.id} chat={chat} userId={store.user.id} />
                )}
            </div>
        );
    }
    return (
        <div>
            There no chats, try to chat friends!
        </div>
    )
};

export default observer(Chats);