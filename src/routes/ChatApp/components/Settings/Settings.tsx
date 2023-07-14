import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import style from "./settings.module.scss";
import { Context } from "../../../../main";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import useStopPropagation from "../../../../hooks/useStopPropagation";
import EditRow from "./components/EditRow/EditRow";

const Settings: FC = () => {
	const { store } = useContext(Context);
	const [showEditUserName, setShowEditUserName] = useState<boolean>(false);

	const editUserName = (userName: string | undefined) => {
		console.log(userName);
		// e.stopPropagation()
	};

	const outClick = (e: MouseEvent) => {
		e.stopPropagation();
		console.log("outclick");

		setShowEditUserName(false);
	};

	return (
		<div onClick={outClick} className={style.wrap}>
			<EditRow
				placeholder={store.user.name ?? store.user.email}
				editValueFunction={editUserName}
				setShowButton={setShowEditUserName}
				showButton={showEditUserName}
			/>
		</div>
	);
};

export default observer(Settings);
