import { MouseEvent } from "react";

export default function (e: MouseEvent) {
	e.stopPropagation();
}
