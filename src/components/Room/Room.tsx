
import style from './room.module.scss'
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { IMessage } from "../../models/IMessage";
import RoomFooter from './components/RoomFooter/RoomFooter';
import RoomHeader from './components/RoomHeader/RoomHeader';
import { IRoom } from '../../models/IRoom';
import { useContext, useEffect, useState } from 'react';
import Messages from './components/Messages/Messages';
import ChatService from '../../service/ChatService';
import MessageService from '../../service/MessageService';
import socketService from '../../service/SocketService';
import { Context } from '../../main';

interface RoomLoader {
    messagesData: IMessage[]
    roomData: IRoom
}

export async function roomLoader({ params }: LoaderFunctionArgs): Promise<RoomLoader> {
    // const messages = await getContact(params.contactId);

    // const conference = await 

    // console.log(params.roomId)

    if (!params.roomId) return {
        roomData: {
                name: '',
                _id: '1',
                // isOnline: true,
                avatarUrl: '',
                users: [
                    {
                        _id: "642b003ebc8eea4eb5fc43e0",
                        name: "Sanya",
                        avatarUrl: '/images/ava1.png',
                        isOnline: false,
                        email: 'ss',
                        isActivated: false
                    },
                    {
                        _id: '123456',
                        name: "Sanya2",
                        avatarUrl: '/images/ava2.png',
                        isOnline: true,
                        
                        email: 'ss',
                        isActivated: false

                    }
                ]
            },
        messagesData: [
            {
                userId: "642b003ebc8eea4eb5fc43e0",
                _id: 'ss1',
                roomId: '1',
                readed: true,
                edited: false,
                date: Date.now() + 1,
                textMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin fermentum massa id faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum suscipit risus at massa tincidunt dictum. Cras aliquam massa metus, in auctor nisi interdum vitae. Sed dictum diam at ornare tincidunt. Nunc ut laoreet enim. Praesent gravida eget leo et maximus. Morbi dolor nisl, posuere vitae orci vitae, ullamcorper tempor felis. In at mollis est.'
            },
            {
                userId: '123456',
                _id: 'ss2',
                roomId: '1',
                readed: false,
                edited: false,
                date: Date.now() + 2,
                textMessage: '2'
            },        
            {
                userId: "642b003ebc8eea4eb5fc43e0",
                roomId: '1',
                _id: 'ss3',
                readed: false,
                edited: false,
                date: Date.now() + 3,
                textMessage: '3'
            },
            {
                userId: '123456',
                roomId: '1',
                readed: true,
                _id: 'ss4',
                edited: true,
                date: Date.now() + 4,
                textMessage: '4'
            },        
            {
                userId: "642b003ebc8eea4eb5fc43e0",
                roomId: '1',
                readed: true,
                _id: 'ss5',
                edited: false,
                date: Date.now() + 5,
                textMessage: '5'
            },
            {
                userId: '123456',
                roomId: '1',
                readed: true,
                _id: 'ss6',
                edited: false,
                date: Date.now() + 6,
                textMessage: '6'
            },        
            {
                userId: "642b003ebc8eea4eb5fc43e0",
                roomId: '1',
                _id: 'ss7',
                readed: true,
                edited: false,
                date: Date.now() + 7,
                textMessage: 'hello'
            },       
            {
                userId: '123456',
                roomId: '1',
                _id: 'ss8',
                readed: true,
                edited: false,
                date: Date.now() + 8,
                textMessage: 'hello67777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777'
            },        
            {
                userId: "642b003ebc8eea4eb5fc43e0",
                roomId: '1',
                _id: 'ss9',
                readed: true,
                edited: false,
                date: Date.now() + 9,
                textMessage: 'hello888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888'
            },        
            {
                userId: '123456',
                roomId: '1',
                _id: 'ss120',
                readed: true,
                edited: false,
                date: Date.now() + 10,
                textMessage: 'hello9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999'
            },        
            {
                userId: "642b003ebc8eea4eb5fc43e0",
                roomId: '1',
                _id: 'ss11',
                readed: true,
                edited: false,
                date: Date.now() + 11,
                textMessage: 'hello2111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'
            }
        ]
    }



    const roomData = (await ChatService.getRoomDataById(params.roomId)).data

    console.log(roomData)
    // const roomData: IRoom = {
    //     name: '',
    //     _id: '1',
    //     // isOnline: true,
    //     avatarUrl: '',
    //     users: [
    //         {
    //             id: "642b003ebc8eea4eb5fc43e0",
    //             name: "Sanya",
    //             avatarUrl: '/images/ava1.png',
    //             isOnline: false,
    //             roomId: '1'
    //         },
    //         {
    //             id: '123456',
    //             name: "Sanya2",
    //             avatarUrl: '/images/ava2.png',
    //             isOnline: true,
    //             roomId: '2'
    //         }
    //     ]
    // }



    const {messages: messagesData} = (await MessageService.getMessagesForConferenceFromId(params.roomId)).data


    socketService.connectRoom(params.roomId)

    return { roomData, messagesData };
  }

const Room = () => {

    const { store } = useContext(Context)
    const { roomData, messagesData } = useLoaderData() as RoomLoader

    const [room, setRoom] = useState<IRoom>(roomData)
    const [messages, setMessages] = useState<IMessage[]>(messagesData)

    const onClickSend = (message: string | undefined) => {
        if (!message) return
        socketService.sendMessage(roomData._id, store.user._id, message)
    }

    useEffect(() => {
        socketService.socket.on('new-message', (message: IMessage) => {
            console.log('new message')
            setMessages(prev => [message, ...prev])
        })
    }, [])

    // console.log(messages)
    return (
        <div className={style.room}>
            <RoomHeader avatarUrl={room.avatarUrl} name={room.name} users={room.users}/>
            <Messages messages={messages}/>
            <RoomFooter onClickSend={onClickSend}/>
        </div>
    );
};

export default Room;