
import { FC, useState } from "react";
import style from './home.module.scss'
import Loop from './svg/loop.svg'
import SearchBtn from './svg/search-btn.svg'
import Friends from "./components/Friends/Friends";
import Chats from './components/Chats/Chats'

const Home: FC = () => {

    const [tab, setTab] = useState<string>('chats')



    return (
        <div className={style.wrap}>
            <div className={style.home}>
                <div className={style.search}>
                    <div className={style.left}>
                        {/* <Loop /> */}
                        <div className={style.loop}>

                        </div>
                        <input type="text" />
                    </div>
                    <div className={style.right}>
    
                        {/* <SearchBtn /> */}
                    </div>
                </div>
                <div>
                    <div>
                        Chats
                    </div>
                    <div>
                        Friends
                    </div>
                </div>
                {tab === 'friends' ? <Friends /> : <Chats />}
            </div>
        </div>
    );
};

export default Home;