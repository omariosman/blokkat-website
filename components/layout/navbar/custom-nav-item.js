import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import DropdownMenu from "./dropdown-menu";
import MegaMenu from "./mega-menu";

export default function CustomNavItem({ navItemText, path, }) {


	return (
		<li className="nav-item">
			<a href={path} className="nav-link-item drop-trigger">
				{navItemText}
			</a>
		</li>
	);
}
