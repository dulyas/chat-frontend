
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

export interface TabComponentProps {
    searchString: string
}

const Home: FC = () => {

    const [currentTab, setCurrentTab] = useState<string>('chats')
    const [inputSearchValue, setInputSearchValue] = useState<string>('')
    const [searchString, setSearchString] = useState<string>('')
    
    const TabComponent: FC<TabComponentProps> = tabsComponents[currentTab]

    return (
        <div className={style.wrap}>
            <div className={style.home}>
                <div className={style.search}>
                    <div className={style.left}>
                       
                        <div className={style.loop}>
                            <Loop />
                        </div>
                        <input 
                        onChange={e => setInputSearchValue(e.target.value)} 
                        value={inputSearchValue}
                        type="text" />
                    </div>
                    <div 
                    onClick={() => setSearchString(inputSearchValue)}
                    className={style.right}>
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
                    <TabComponent searchString={searchString} />
                </div>
            </div>
        </div>
    );
};

export default Home;