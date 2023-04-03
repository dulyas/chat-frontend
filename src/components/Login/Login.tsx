import { FC } from 'react';
import sitting from './sitting-woman.png'
import Back from './back.svg'
import Button from '../Button/Button';
import style from './login.module.scss'
import { useState, useContext } from 'react';
import { Context } from '../../main';
import { observer } from 'mobx-react-lite'
import { Navigate } from 'react-router-dom';

const Login: FC = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store}  = useContext(Context)

    const login = async ():Promise<void> => {
        await store.login(email, password)
    }

    if (store.isAuth) {
        return (
            <Navigate to='/chat' />
        )
    }

    return (
        <div className={style.login}>
            <div className={style.content}>
                <div className={style.image}>
                    <img src={sitting} alt="sitting" />
                </div>
                <h1>Hello, Welcome Back</h1>
                <h2>Happy to see you again, to use your <br/>account please login first.</h2>
                <div className={style.labels}>
                    <div className={style.label}>
                        <label>
                            <div>
                                Email Address
                            </div>
                            <input 
                            onChange={e => setEmail(e.target.value)} 
                            type="text" 
                            value={email}
                            placeholder='Email'
                            />
                        </label>
                    </div>
                    <div className={style.label}>
                        <label>
                            <div>
                                Password
                            </div>
                            <input 
                            onChange={e => setPassword(e.target.value)} 
                            type="password" 
                            value={password}
                            placeholder='Password' />
                        </label>
                    </div>
                </div>
                <div className={style.forgot}>
                    <button>
                        Forgot Password
                    </button>
                </div>
                <div className={style.buttons}>
                    <div className={style.button}>
                        <Button text="Login" click={login}/>
                    </div>
                    <div className={style.button}>
                        <Button text="Register" click={() => store.registration(email, password)}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(Login);