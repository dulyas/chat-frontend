
import { FC, useState } from "react";
import style from './home.module.scss'
import Loop from './svg/loop.svg'
import SearchBtn from './svg/search-btn.svg'
import Friends from "./components/Friends/Friends";
import Chats from './components/Chats/Chats'


interface Tab {
    title: string
    code: string
}

interface TabsComponents {
    [code:string]: FC
}

const tabs: Tab[] = [
    {
        title: 'Chats',
        code: 'chats',
    },
    {
        title: 'Friends',
        code: 'friends',
    },
]

const tabsComponents: TabsComponents = {
    chats: Chats,
    friends: Friends
}


const Home: FC = () => {


    const [currentTab, setCurrentTab] = useState<string>('chats')
    const TabComponent: FC = tabsComponents[currentTab]

    return (
        <div className={style.wrap}>
            <div className={style.home}>
                <div className={style.search}>
                    <div className={style.left}>
                       
                        <div className={style.loop}>
                            <Loop />
                        </div>
                        <input type="text" />
                    </div>
                    <div className={style.right}>
    
                        <SearchBtn />
                    </div>
                </div>
                <div className={style.tabs}>
                    {tabs.map(tab => 
                        <div 
                        className={style.tab + (tab.code === currentTab ? (' ' + style.active) : '')}
                        onClick={() => setCurrentTab(tab.code)}
                        key={tab.code}>
                            {tab.title}
                        </div>
                    )}
                </div>
                <div className={style.tab_component}>
                    <TabComponent />
                </div>
            </div>
        </div>
    );
};

export default Home;