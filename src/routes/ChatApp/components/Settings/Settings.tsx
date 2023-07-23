import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import style from "./settings.module.scss";
import { Context } from "@/main";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import useStopPropagation from "@/hooks/useStopPropagation";
import EditRow from "./components/EditRow/EditRow";
import Button from "@/components/Button/Button";
import { useNavigate } from "react-router-dom";

const Settings: FC = () => {
	const { store } = useContext(Context);
	const [showEditUserName, setShowEditUserName] = useState<boolean>(false);
	const navigate = useNavigate();

	const editUserName = (userName: string | undefined) => {
		console.log(userName);
		// e.stopPropagation()
	};

	const outClick = (e: MouseEvent) => {
		e.stopPropagation();
		console.log("outclick");

		setShowEditUserName(false);
	};

	const onClickLogout = async (e: MouseEvent) => {
		e.stopPropagation();
		await store.logout();
		navigate("/login");
	};

	return (
		<div onClick={outClick} className={style.wrap}>
			<EditRow
				placeholder={store.user.name ?? store.user.email}
				editValueFunction={editUserName}
				setShowButton={setShowEditUserName}
				showButton={showEditUserName}
			/>

			<Button text="Logout" click={onClickLogout} />
		</div>
	);
};

export default observer(Settings);
