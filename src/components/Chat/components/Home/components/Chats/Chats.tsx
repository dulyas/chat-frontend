
import { observer } from 'mobx-react-lite'
import { useContext, useState, useEffect } from 'react';
import { Context } from '../../../../../../main';
import style from './chats.module.scss'
import Ok from './ok.svg'


const Chats = () => {

    const {store} = useContext(Context)

    if (store?.user?.chats?.length) {
        return (
            <div className={style.chats}>
                {store.user.chats.map(chat => 
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
                            <div className={style.message}>
                                <Ok />
                                {chat.lastMessage.textMessage}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
};

export default observer(Chats);