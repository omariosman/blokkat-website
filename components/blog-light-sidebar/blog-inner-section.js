import BlogContentSection from "../common/blog/blog-content-section";
import BreadcrumbsSection from "./../common/blog/breadcrumbs-section";

export default function BlogInnerSection({ theme }) {
	let themeClassName = theme === "dark" ? "dark-version" : "light-version";
	return (
		<div className={`fugu--inner-section light-version ${themeClassName}`}>
			<div className="container">
				<BreadcrumbsSection />
				<BlogContentSection theme={theme} />
			</div>
		</div>
	);
}
