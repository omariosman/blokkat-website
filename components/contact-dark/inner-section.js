/* eslint-disable @next/next/no-img-element */

import BreadcrumbSection from "./breadcrumb-section";
import ContactSection from "./contact-section";

export default function InnerSection() {
	return (
		<div className="fugu--inner-section dark-version">
			<div className="container">
				<BreadcrumbSection />
				<ContactSection />
			</div>
			<div className="fugu--blog-shape1">
				<img src="/images/all-img/v3/shape2.png" alt="" />
			</div>
			<div className="fugu--blog-shape3">
				<img src="/images/all-img/blog2/shape.png" alt="" />
			</div>
		</div>
	);
}
