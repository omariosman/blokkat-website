import SingleBlogPost from "./single-blog-post";
import SingleBlogSidebarSection from "./single-blog-sidebar-section";

export default function SingleBlogContainer() {
	return (
		<div className="fugu-blog-section fugu-section-padding">
			<div className="container">
				<div className="row">
					<div className="col-xl-8 col-lg-7">
						<SingleBlogPost />
					</div>
					<div className="col-xl-4 col-lg-5">
						<SingleBlogSidebarSection />
					</div>
				</div>
			</div>
		</div>
	);
}
