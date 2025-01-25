/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Breadcrumb({title="About Us"}) {
	return (
		<div className="fugu-breadcrumb-section">
			<div className="container">
				<div className="breadcrumbs">
					<h1 className="wow fadeInUpX" data-wow-delay="0s">
						{title}
					</h1>
					<nav aria-label="breadcrumb" className="wow fadeInUpX" data-wow-delay="0.15s">
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
		</div>
	);
}
