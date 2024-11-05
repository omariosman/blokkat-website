/* eslint-disable @next/next/no-img-element */

import dynamic from "next/dynamic";
import BlogTopSection from "../blog-light/blog-top-section";
import BreadcrumbsSection from "../blog-light/breadcrumbs-section";
import BlogPaginationDark from "./blog-pagination";
const BlogFilterning = dynamic(() => import("./blog-filtering"), {
	ssr: false,
});
export default function BlogDarkInnerSection() {
	return (
		<div className="fugu--inner-section dark-version">
			<div className="container">
				<BreadcrumbsSection />
				<BlogTopSection />
				<BlogFilterning />
				<BlogPaginationDark />
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
