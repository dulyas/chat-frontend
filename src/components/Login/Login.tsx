import { FC } from 'react';
import sitting from './sitting-woman.png'
import Back from './back.svg'
import Button from '../Button/Button';
import style from './login.module.scss'

const Login: FC = () => {

    const sendForm = async () => {
        console.log('sendForm')
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
                            <input type="text" />
                        </label>
                    </div>
                    <div className={style.label}>
                        <label>
                            <div>
                                Password
                            </div>
                            <input type="text" />
                        </label>
                    </div>
                </div>
                <div className={style.forgot}>
                    <button>
                        Forgot Password
                    </button>
                </div>
                <div className={style.button}>
                    <Button text="Login" click={sendForm}/>
                </div>
            </div>
        </div>
    );
};

export default Login;