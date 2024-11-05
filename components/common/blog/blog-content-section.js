import BlogPagination from "./blog-pagination";
import BlogPostSection from "./blog-post-section";
import BlogSidebarSection from "./blog-sidebar-section";

export default function BlogContentSection({ theme }) {
	return (
		<div className="fugu--blog-sidebar-section">
			<div className="row">
				<div className="col-lg-8">
					<BlogPostSection />
					<BlogPagination theme={theme} />
				</div>
				<div className="col-lg-4">
					<BlogSidebarSection />
				</div>
			</div>
		</div>
	);
}
