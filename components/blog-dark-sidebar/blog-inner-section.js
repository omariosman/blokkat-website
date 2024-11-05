/* eslint-disable @next/next/no-img-element */
import BlogContentSection from "../common/blog/blog-content-section";
import BreadcrumbsSection from "../common/blog/breadcrumbs-section";

export default function BlogInnerSection({ theme }) {
	let themeClassName = theme === "dark" ? "dark-version" : "light-version";
	return (
		<div className={`fugu--inner-section  ${themeClassName}`}>
			<div className="container">
				<BreadcrumbsSection />
				<BlogContentSection theme={theme} />
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
