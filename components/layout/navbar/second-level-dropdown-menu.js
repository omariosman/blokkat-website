import { v4 as uuidv4 } from "uuid";
import SecondLevelDropdownItem from "./second-level-dropdown-item";
import { useRef } from "react";
export default function SecondLevelDropdownMenu({ isClicked, submenu }) {
	const submenuThree = useRef();

	return (
		<ul ref={submenuThree} className={`sub-menu shape-none ${isClicked ? "active" : ""}`} id="submenu-3">
			{submenu?.length &&
				submenu.map((item) => (
					<SecondLevelDropdownItem navItemText={item.title} path={item.path} key={uuidv4()} />
				))}
		</ul>
	);
}
