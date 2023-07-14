import { FC, useRef, useState } from "react";
import style from "./addfriends.module.scss";
import Loop from "./svg/loop.svg";
import SearchBtn from "./svg/search-btn.svg";

import FriendsCandidates from "./components/Friends/FriendsCandidates";

export interface TabComponentProps {
	searchString: string;
}

const AddFriends: FC = () => {
	// const [inputSearchValue, setInputSearchValue] = useState<string>('')

	const input = useRef<HTMLInputElement | null>(null);

	const [searchString, setSearchString] = useState<string>("");

	return (
		<div className={style.wrap}>
			<div className={style.home}>
				<div className={style.search}>
					<div className={style.left}>
						<div className={style.loop}>
							<Loop />
						</div>
						<input ref={input} type="text" />
					</div>
					<div
						onClick={() => {
							setSearchString(input?.current?.value ?? "");
						}}
						className={style.right}
					>
						<SearchBtn />
					</div>
				</div>
				<div className={style.tab_component}>
					<FriendsCandidates searchString={searchString} />
				</div>
			</div>
		</div>
	);
};

export default AddFriends;
