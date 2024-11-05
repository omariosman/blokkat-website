/* eslint-disable @next/next/no-img-element */
import CountUp from "react-countup";

export default function ArtWorkSection() {
	return (
		<div className="fugu--artwork-section">
			<div id="fugu--counter2"></div>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 order-lg-2">
						<div className="fugu--artwork-right">
							<div className="fugu--artwork-thumb" id="rotatetwo">
								<img
									className="wow fadeInRight"
									data-wow-delay="0.10s"
									src="/images/all-img/v4/thumb1.png"
									alt=""
								/>
								<div
									className="fugu--artwork-data wow fadeInUpX"
									data-wow-delay=".20s"
									style={{ backgroundImage: "url(/images/all-img/v4/shape.png)" }}
								>
									<p>
										fugu--Gen NFT <br />
										Marketplace
									</p>
								</div>
							</div>
							<div className="fugu--shape-art">
								<img src="/images/shape2/shape-v2-3.png" alt="" />
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="fugu--default-content content-black">
							<h2>We add value to your artwork & sell them</h2>
							<p>
								Start your NFT collection quickly & easily by grabbing a free NFT every week! Get in
								early and grab NFTs before most of the world. Start your journey here.
							</p>
							<div className="fugu--counter-wrap fugu--counter-wrap2">
								<div className="fugu--counter-data">
									<h2>
										<span data-percentage="45" className="fugu--counter"></span>
										<CountUp end={45} />
										<strong>K</strong>
									</h2>
									<p>Digital Artworks</p>
								</div>
								<div className="fugu--counter-data">
									<h2>
										<span data-percentage="86" className="fugu--counter"></span>
										<CountUp end={86} />
										<strong>K</strong>
									</h2>
									<p>Global Creators</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
