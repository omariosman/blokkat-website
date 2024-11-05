import { v4 as uuidv4 } from "uuid";
import MegaDropdownItem from "./mega-dropdown-item";
export default function MegaMenuItem({ menuItems }) {
	return (
		<li className="col-lg-3">
			<div className="single-dropdown-block">
				<h3>{menuItems?.title}</h3>
				{menuItems?.submenu.length &&
					menuItems.submenu.map((item) => <MegaDropdownItem dropdownItem={item} key={uuidv4()} />)}
			</div>
		</li>
	);
}
