import Link from "next/link";
import React from "react";

export default function TagSection() {
	return (
		<div className="fugu--tags fugu--tags2">
			<h4>Tags:</h4>
			<ul>
				<li>
					<Link href={"#"}> NFTs art </Link>
				</li>
				<li>
					<Link href={"#"}> Cryptocurrency </Link>
				</li>
				<li>
					<Link href={"#"}> Digital </Link>
				</li>
				<li>
					<Link href={"#"}> Creative works </Link>
				</li>
			</ul>
		</div>
	);
}
