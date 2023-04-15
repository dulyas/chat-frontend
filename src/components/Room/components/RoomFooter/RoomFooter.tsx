import { FC } from "react";
import style from './roomfooter.module.scss'
import SendIcon from './svg/send.svg'
import { memo } from "react";

const RoomFooter: FC = () => {

    console.log('render room footer')

    return (
        <div className={style.footer}>
            <input placeholder="Type here..." type="text" />
            <div className={style.icons}>
                <div className={style.icon}>
                    <SendIcon />
                </div>
            </div>
        </div>
    );
};

export default memo(RoomFooter);