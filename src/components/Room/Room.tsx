
import style from './room.module.scss'
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { IMessage } from "../../models/IMessage";
import RoomFooter from './components/RoomFooter/RoomFooter';
import RoomHeader from './components/RoomHeader/RoomHeader';
import { IRoom } from '../../models/IRoom';
import { useContext, useState } from 'react';
import Messages from './components/Messages/Messages';

interface RoomLoader {
    messagesData: IMessage[]
    roomData: IRoom
}

export async function roomLoader({ params }: LoaderFunctionArgs): Promise<RoomLoader> {
    // const messages = await getContact(params.contactId);

    // console.log(params.roomId)

    const roomData: IRoom = {
        name: '',
        id: '1',
        // isOnline: true,
        avatarUrl: '',
        users: {
            "642b003ebc8eea4eb5fc43e0": {
                id: "642b003ebc8eea4eb5fc43e0",
                name: "Sanya",
                avatarUrl: '/images/ava1.png',
                isOnline: false,
                roomId: '1'
            },
            '123456': {
                id: '123456',
                name: "Sanya2",
                avatarUrl: '/images/ava2.png',
                isOnline: true,
                roomId: '2'
            }
        }
    }

    const messagesData: IMessage[] = [
        {
            userId: "642b003ebc8eea4eb5fc43e0",
            roomId: '1',
            readed: true,
            edited: false,
            date: Date.now() + 1,
            textMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin fermentum massa id faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum suscipit risus at massa tincidunt dictum. Cras aliquam massa metus, in auctor nisi interdum vitae. Sed dictum diam at ornare tincidunt. Nunc ut laoreet enim. Praesent gravida eget leo et maximus. Morbi dolor nisl, posuere vitae orci vitae, ullamcorper tempor felis. In at mollis est.'
        },
        {
            userId: '123456',
            roomId: '1',
            readed: false,
            edited: false,
            date: Date.now() + 2,
            textMessage: '2'
        },        
        {
            userId: "642b003ebc8eea4eb5fc43e0",
            roomId: '1',
            readed: false,
            edited: false,
            date: Date.now() + 3,
            textMessage: '3'
        },
        {
            userId: '123456',
            roomId: '1',
            readed: true,
            edited: true,
            date: Date.now() + 4,
            textMessage: '4'
        },        
        {
            userId: "642b003ebc8eea4eb5fc43e0",
            roomId: '1',
            readed: true,
            edited: false,
            date: Date.now() + 5,
            textMessage: '5'
        },
        {
            userId: '123456',
            roomId: '1',
            readed: true,
            edited: false,
            date: Date.now() + 6,
            textMessage: '6'
        },        
        {
            userId: "642b003ebc8eea4eb5fc43e0",
            roomId: '1',
            readed: true,
            edited: false,
            date: Date.now() + 7,
            textMessage: 'hello'
        },       
        {
            userId: '123456',
            roomId: '1',
            readed: true,
            edited: false,
            date: Date.now() + 8,
            textMessage: 'hello67777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777'
        },        
        {
            userId: "642b003ebc8eea4eb5fc43e0",
            roomId: '1',
            readed: true,
            edited: false,
            date: Date.now() + 9,
            textMessage: 'hello888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888'
        },        
        {
            userId: '123456',
            roomId: '1',
            readed: true,
            edited: false,
            date: Date.now() + 10,
            textMessage: 'hello9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999'
        },        
        {
            userId: "642b003ebc8eea4eb5fc43e0",
            roomId: '1',
            readed: true,
            edited: false,
            date: Date.now() + 11,
            textMessage: 'hello2111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'
        }
    ]

    return { roomData, messagesData };
  }

const Room = () => {


    const { roomData, messagesData } = useLoaderData() as RoomLoader

    const [room, setRoom] = useState<IRoom>(roomData)
    const [messages, setMessages] = useState<IMessage[]>(messagesData)




    console.log(messages)
    return (
        <div className={style.room}>
            <RoomHeader avatarUrl={room.avatarUrl} name={room.name} users={room.users}/>
            <Messages messages={messages}/>
            <RoomFooter />
        </div>
    );
};

export default Room;