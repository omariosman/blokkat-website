/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function FeatureSection() {
	return (
		<div className="fugu--feature2-section fugu--section-padding2">
			<div className="container">
				<div className="fugu--section-title">
					<div className="fugu--default-content content-black">
						<h2>Our vision is to build a strong NFT portfolio of denomination</h2>
						<p>
							We're excited about a brand new type of digital good called a non-fungible token. NFTs get
							their value the transaction proves ownership of the art.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-4 col-md-6">
						<div className="fugu--feature-wrap wow fadeInUpX" data-wow-delay=".10s">
							<div className="fugu--feature-data">
								<h2>01</h2>
								<span>Safe and secure</span>
								<p>
									NFTs are safe when bought or sold on reputable exchanges, & they cannot be stolen if
									users properly secure.
								</p>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-6">
						<div className="fugu--feature-wrap wow fadeInUpX" data-wow-delay=".20s">
							<div className="fugu--feature-data">
								<h2>02</h2>
								<span>Complete transparency</span>
								<p>
									Transparency in a process involves it being completely visible and open to scrutiny,
									so that it's clear.
								</p>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-6">
						<div className="fugu--feature-wrap wow fadeInUpX" data-wow-delay=".30s">
							<div className="fugu--feature-data">
								<h2>03</h2>
								<span>Creative team</span>
								<p>
									Nexto has creative artists, painters, and designers working tirelessly on NFT art
									all over the world.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
