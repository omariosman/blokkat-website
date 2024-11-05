import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function BreadcrumbOne({ title }) {
	return (
		<div className="fugu-breadcrumb-section">
			<div className="container">
				<div className="breadcrumbs">
					<h1>{title}</h1>
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<Link href={"/"}>Home</Link>
							</li>
							<li className="breadcrumb-item active" aria-current="page">
								{title}
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
