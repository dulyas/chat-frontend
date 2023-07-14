import { FC, useMemo } from "react";
import { Tab } from "../../ChatApp";
import style from "./footer.module.scss";

interface FooterProps {
	tabs: Tab[];
	onClickTab: (tab: string) => void;
	currentTab: string;
}

const Footer: FC<FooterProps> = ({ tabs, onClickTab, currentTab }) => {
	// console.log('footer render')

	return (
		<div className={style.footer}>
			{tabs.map((tab) => (
				<div
					key={tab.query}
					onClick={() => onClickTab(tab.query)}
					className={
						style.footer_item +
						((currentTab === tab.query && ` ${style.active}`) || "")
					}
				>
					<tab.svg />
				</div>
			))}
		</div>
	);
};

export default Footer;
