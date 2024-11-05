import Link from "next/link";

export default function SecondLevelDropdownItem({ navItemText, path }) {
	return (
		<li className="sub-menu--item">
			<Link href={path}>{navItemText}</Link>
		</li>
	);
}
