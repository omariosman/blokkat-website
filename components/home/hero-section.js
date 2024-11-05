import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function HeroSection() {
	return (
		<div className="fugu-hero-section">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-lg-7">
						<div className="fugu-hero-content">
							<h1 className="wow fadeInUpX" data-wow-delay="0s">
								The crypto trading app for the next-gen
							</h1>
							<p className="wow fadeInUpX" data-wow-delay="0.25s">
								Fugu is the app that gives you access to trading tools that you can actively buy & sell
								digital currencies in an optimal way.
							</p>
							<div className="fugu-app-btn-wrap wow fadeInUpX" data-wow-delay="0.40s">
								<Link href={"contact"} legacyBehavior>
									<a className="fugu-app-btn">
										<img src="/images/all-img/app-store.png" alt="title" />
									</a>
								</Link>
								<Link href={"contact"} legacyBehavior>
									<a className="fugu-app-btn">
										<img src="/images/all-img/play-store.png" alt="title" />
									</a>
								</Link>
							</div>
							<div className="fugu-hero-client-area wow fadeInUpX" data-wow-delay="0.50s">
								<div className="fugu-hero-client-wrap">
									<div className="fugu-hero-client-thumb">
										<img src="/images/all-img/client.png" alt="title" />
									</div>
									<div className="fugu-hero-client-data">
										<h3>64,739</h3>
										<p>Happy Customers</p>
									</div>
								</div>
								<div className="fugu-hero-client-rating">
									<h3>4.8/5</h3>
									<ul>
										<li>
											<img src="/images/svg/star1.svg" alt="title" />
										</li>
										<li>
											<img src="/images/svg/star1.svg" alt="title" />
										</li>
										<li>
											<img src="/images/svg/star1.svg" alt="title" />
										</li>
										<li>
											<img src="/images/svg/star1.svg" alt="title" />
										</li>
										<li>
											<img src="/images/svg/star2.svg" alt="title" />
										</li>
										<li>Rating</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-5">
						<div className="fugu-hero-thumb">
							<img src="/images/all-img/hand-mocup.png" alt="title" />
							<div className="fugu-shape2">
								<img src="/images/shape/shape2.png" alt="title" />
							</div>
							<div className="fugu-hero-star">
								<img src="/images/all-img/star-shape.png" alt="title" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="fugu-shape1">
				<img src="/images/shape/shape1.png" alt="title" />
			</div>
		</div>
	);
}
