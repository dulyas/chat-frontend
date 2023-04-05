
import Footer from './components/Footer/Footer';
import { FC, useEffect, useState } from 'react';
import style from './chat.module.scss'
import svg from './svg'
import { useSearchParams } from "react-router-dom";

import Home from './components/Home/Home';
import AddFriends from './components/AddFriends/AddFriends';
import Settings from './components/Settings/Settings';

export interface Tab {
    svg: string
    query: string
}

export interface TabComponent {
    [key: string]: FC
}

const tabs: Tab[] = [
    {
        svg: svg.Home,
        query: 'home'
    },
    {
        svg: svg.AddFriend,
        query: 'add-friend'
    },
    {
        svg: svg.Settings,
        query: 'settings'
    }
]

const tabsComponents: TabComponent = {
    home: Home,
    'add-friend': AddFriends,
    settings: Settings
}

const Chat = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [currentTab, setCurrentTab] = useState<string>(searchParams.get('tab') ?? 'home')
    

    useEffect(() => {
        if (!searchParams.get('tab')) setSearchParams({tab: 'home'})
    }, [])
    

    const onClickTab = (tab: string): void => {
        setCurrentTab(tab)
        setSearchParams({tab})
    }

    const CurrentTabComponent = tabsComponents[currentTab]


    return (
        <div className={style.chat}>
            {/* {tabs.map(tab => tab.query === currentTab && <tab.component />)} */}
            <CurrentTabComponent />
            <Footer tabs={tabs} onClickTab={onClickTab} currentTab={currentTab}/>
        </div>
    );
};

export default Chat;