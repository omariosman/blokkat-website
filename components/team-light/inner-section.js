import BreadcrumbSection from "./breadcrumb-section";
import TeamSection from "./team-section";

export default function InnerSection() {
	return (
		<div className="fugu--inner-section light-version bg-white team-page">
			<div className="container">
				<BreadcrumbSection />
				<TeamSection />
			</div>
		</div>
	);
}
