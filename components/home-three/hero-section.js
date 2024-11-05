/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CountUp from "react-countup";

export default function HeroSection() {
	return (
		<div className="fugu--hero-section" style={{ backgroundImage: "url(/images/all-img/v3/hero-bg.png)" }}>
			<div id="fugu--counter"></div>
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="fugu--hero-content">
							<h1 className="wow fadeInUpX" data-wow-delay="0s">
								Discover the latest digital art and collect NFTs
							</h1>
							<p className="wow fadeInUpX" data-wow-delay="0.10s">
								The largest NFT marketplace. We make NFTs easier and more efficient for culture and
								creativity, built efficiently for you.
							</p>
							<div className="fugu--btn-wrap fugu--hero-btn wow fadeInUpX" data-wow-delay="0.20s">
								<Link href={"#"} legacyBehavior>
									<a className="fugu--btn bg-gray active">Get Started</a>
								</Link>
								<Link href={"#"} legacyBehavior>
									<a className="fugu--btn bg-gray">View Artwork</a>
								</Link>
							</div>
							<div className="fugu--counter-wrap wow fadeInUpX" data-wow-delay="0.30s">
								<div className="fugu--counter-data">
									<h2>
										<span data-percentage="45" className="fugu--counter">
											<CountUp end={45} />
										</span>
										<strong>K</strong>
									</h2>
									<p>Artwork</p>
								</div>
								<div className="fugu--counter-data">
									<h2>
										<span data-percentage="86" className="fugu--counter">
											<CountUp end={86} />
										</span>
										<strong>K</strong>
									</h2>
									<p>Auction</p>
								</div>
								<div className="fugu--counter-data">
									<h2>
										<span data-percentage="32" className="fugu--counter">
											<CountUp end={32} />
										</span>
										<strong>K</strong>
									</h2>
									<p>Artist</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="fugu--hero-right" id="rotateOne">
							<div className="fugu--card-wrap">
								<div className="fugu--card-thumb">
									<img src="/images/all-img/v3/hero-thumb2.png" alt="" />
								</div>
								<div className="fugu--card-data">
									<h3>The Exorians Universe</h3>
									<p>Pre-sale : 18 May 2023</p>
									<div className="fugu--card-footer">
										<div className="fugu--card-footer-data">
											<span>Mint Price:</span>
											<h4>0.194 ETH</h4>
										</div>
										<Link href={"#"} legacyBehavior>
											<a className="fugu--btn btn-sm bg-white">Place a Bid</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="fugu--hero-shape1">
					<img src="/images/all-img/v3/shape-hero1.png" alt="" />
				</div>
				<div className="fugu--hero-shape2"></div>
			</div>
		</div>
	);
}
