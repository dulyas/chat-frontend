import { FC } from 'react';
import style from './mainPage.module.scss'
import peoples from './peoples.png'
import ProgressLogo from './progress.svg'
import Button from '../Button/Button';

const MainPage: FC = () => {


    return (
        <div>
            <h1 className={style.title}>
                Get Closer To<br/> EveryOne
                </h1>
            <h2 className={style.subtitle}>
                Helps you to contact everyone with<br/>just easy way
            </h2>
            <div className={style.image}>
                <img src={peoples} alt="peoples" />
            </div>
            <div className={style.progress}>
                <ProgressLogo />
            </div>
            <div className={style.buttons}>
                <div className={style.button}>
                    <Button text="Login" click='/login'/>
                </div>
                <div className={style.button}>
                    <Button text="Login" click='/login'/>
                </div>
            </div>
        </div>
    );
};

export default MainPage;