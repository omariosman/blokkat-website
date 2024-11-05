export default function MegaDropdownItem({ dropdownItem }) {
	
	return (
		<a href={dropdownItem.path} className="mega-drop-menu-item sub-menu--item">
			{dropdownItem.title}
		</a>
	);
}
