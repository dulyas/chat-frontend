
import style from './room.module.scss'
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { IMessage } from "../../models/IMessage";
import RoomFooter from './components/RoomFooter/RoomFooter';
import RoomHeader from './components/RoomHeader/RoomHeader';
import { IRoom } from '../../models/IRoom';
import { useContext, useState } from 'react';


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
            date: Date.now(),
            textMessage: 'hello'
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
            <RoomFooter />
        </div>
    );
};

export default Room;