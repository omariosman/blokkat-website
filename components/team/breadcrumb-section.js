import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function BreadcrumbSection() {
	return (
		<div className="fugu-breadcrumb-section">
			<div className="container">
				<div className="breadcrumbs">
					<h1 className="wow fadeInUpX" data-wow-delay="0s">
						Our Team
					</h1>
					<nav aria-label="breadcrumb" className="wow fadeInUpX" data-wow-delay="0.15s">
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<Link href={"/"}>Home</Link>
							</li>
							<li className="breadcrumb-item active" aria-current="page">
								Our Team
							</li>
						</ol>
					</nav>
				</div>
			</div>
			<div className="fugu-shape8">
				<img src="/images/shape/shape7.png" alt="" />
			</div>
			<div className="fugu-shape9">
				<img src="/images/shape/shape8.png" alt="" />
			</div>
		</div>
	);
}
