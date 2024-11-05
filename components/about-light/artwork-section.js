/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function ArtWorkSection() {
	return (
		<div className="fugu--artwork-section fugu--section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="fugu--artwork-right left">
							<div className="fugu--artwork-thumb" id="rotateThree">
								<img
									className="wow fadeInLeft"
									data-wow-delay=".10s"
									src="/images/all-img/v4/thumb1.png"
									alt=""
								/>
								<div
									className="fugu--artwork-data wow fadeInUpX"
									data-wow-delay=".50s"
									style={{ backgroundImage: "url(/images/all-img/v4/shape.png)" }}
								>
									<p>
										fugu--Gen NFT <br />
										Marketplace
									</p>
								</div>
							</div>
							<div className="fugu--shape-art fugu--shape-art2">
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
							<p>
								We're excited about a brand new type of digital a called NFT. NFTs have exciting new
								properties: provably scarce, tradeable, and across multiple applications.
							</p>
							<div className="fugu--btn-wrap">
								<Link legacyBehavior href={"/"}>
									<a className="fugu--btn bg-orange">Join Community</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
