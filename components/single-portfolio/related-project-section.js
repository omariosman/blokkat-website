/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function RelatedProjectSection() {
	return (
		<div className="fugu-portfolio-ratated-project">
			<h2>Related Project:</h2>
			<p>
				There are many variations of passages of Lorem Ipsum available, but the majority have suf alteration in
				some form, by injected humour, or randomised words which don't look even slightly believable.
			</p>
			<div className="row">
				<div className="col-lg-4 col-md-6">
					<div className="fugu-gallery-item wow fadeInUpX" data-wow-delay="0s">
						<img src="/images/all-img/portfolio/p3.png" alt="" />
						<div className="fugu-gallery-data">
							<h5>
								<Link href={"single-portfolio"}> Commercial </Link>
							</h5>
							<p>Digital Art</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="fugu-gallery-item wow fadeInUpX" data-wow-delay=".10s">
						<img src="/images/all-img/portfolio/p4.png" alt="" />
						<div className="fugu-gallery-data">
							<h5>
								<Link href={"single-portfolio"}> Primitive culture </Link>
							</h5>
							<p>Digital Art</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
					<div className="fugu-gallery-item wow fadeInUpX" data-wow-delay=".20s">
						<img src="/images/all-img/portfolio/p5.png" alt="" />
						<div className="fugu-gallery-data">
							<h5>
								<Link href={"single-portfolio"}> Crypto coin </Link>
							</h5>
							<p>UI/UX Design</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
