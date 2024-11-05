import React from "react";
import ProjectAboutSection from "./project-about-section";
import ProjectDetailsSection from "./project-details-section";
import ProjectExecutionSection from "./project-execution-section";
import ProjectThumbSection from "./project-thumb-section";
import RelatedProjectSection from "./related-project-section";

export default function SectionOne() {
	return (
		<div className="section fugu-section-padding3">
			<div className="container">
				<div className="fugu-gallery-wrap3">
					<div className="row">
						<div className="col-lg-12">
							<ProjectThumbSection />
						</div>
						<div className="col-lg-10">
							<ProjectAboutSection />
							<ProjectDetailsSection />
							<ProjectExecutionSection />
						</div>
					</div>
					<RelatedProjectSection />
				</div>
			</div>
		</div>
	);
}
