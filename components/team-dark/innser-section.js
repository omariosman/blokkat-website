import React from "react";
import BreadcrumbSection from "./breadcrumb-section";
import TeamSection from "./team-section";

export default function InnerSection() {
	return (
		<div className="fugu--inner-section dark-version team-page">
			<div className="container">
				<BreadcrumbSection />
				<TeamSection />
			</div>
		</div>
	);
}
