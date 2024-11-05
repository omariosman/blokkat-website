import dynamic from "next/dynamic";
import BlogPaginationLight from "./blog-pagination";
import BlogTopSection from "./blog-top-section";
import BreadcrumbsSection from "./breadcrumbs-section";
const BlogFilterning = dynamic(() => import("./blog-filtering"), {
	ssr: false,
});

export default function BlogInnerSection() {
	return (
		<div className="fugu--inner-section light-version">
			<div className="container">
				<BreadcrumbsSection />
				<BlogTopSection />
				<BlogFilterning />
				<BlogPaginationLight />
			</div>
		</div>
	);
}
