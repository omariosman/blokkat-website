import { v4 as uuidv4 } from "uuid";
import MegaMenuItem from "./mega-menu-item";
export default function MegaMenu({ menuItems }) {
	return (
		<div className="sub-menu megamenu megadropdown-center d-lg-flex" id="submenu-100">
			<ul className="col-lg-12 row-lg list-unstyled py-lg-7">
				{menuItems?.length && menuItems.map((item) => <MegaMenuItem menuItems={item} key={uuidv4()} />)}
				<MegaMenuItem />
			</ul>
		</div>
	);
}
