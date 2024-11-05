import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function HeroSection() {
	return (
		<div className="fugu--hero-section3" style={{ backgroundImage: "url(/images/all-img/v5/hero-bg2.png)" }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="fugu--hero-content fugu--hero-content3">
							<h1 className="wow fadeInUpX" data-wow-delay="0s">
								New-gen of digital currency
							</h1>
							<p className="wow fadeInUpX" data-wow-delay="0.15s">
								Get started with one of the easiest and most secure platforms for buying, selling,
								trading, and earning cryptocurrency in one place.
							</p>
							<div className="fugu--btn-wrap fugu--hero-btn wow fadeInUpX" data-wow-delay="0.25s">
								<Link href={"/"} legacyBehavior>
									<a className="fugu--btn bg-blue active">Get Started</a>
								</Link>
								<Link href={"/"} legacyBehavior>
									<a className="fugu--btn bg-blue">Discover More</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="fugu--thumb-three">
							<div className="fugu--hero-thumb fugu--hero-thumb3">
								<img
									className="wow fadeInUpX"
									data-wow-delay="0.20s"
									src="/images/all-img/v5/hero-thumb.png"
									alt=""
								/>
								<div className="fugu--bitcoin bitcoin-one">
									<img src="/images/all-img/v5/bitcoin1.png" alt="" />
								</div>
								<div className="fugu--bitcoin bitcoin-two">
									<img src="/images/all-img/v5/bitcoin2.png" alt="" />
								</div>
								<div className="fugu--bitcoin bitcoin-three">
									<img src="/images/all-img/v5/bitcoin3.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="fugu--circle-shape circle-one">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
			<div className="fugu--circle-shape circle-two">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
		</div>
	);
}
