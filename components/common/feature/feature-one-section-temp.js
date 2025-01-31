/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function FeatureOneSectionTemp({title}) {
	return (
		<div className="section bg-warning-200 fugu-section-padding3">
			<div className="container">
				<div className="fugu-section-title">
					<h2>{title}</h2>
				</div>
				<div className="row fugu-iconbox-container">
					<div className="col-lg-4 col-md-6">
						<div className="fugu-iconbox-wrap2 wow fadeInUpX" data-wow-delay="0s">
							<div className="fugu-iconbox-icon2">
								<h2>📚</h2>
							</div>
							<div className="fugu-iconbox-data2">
								<h3 style={{textAlign: "center"}}>Skills</h3>
								<p>
									Learn industry-level Web3 development. Learn blockchain fundamentals, solidity development, and dapp development. Be ready to join internships, hackathons, and more!
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="fugu-iconbox-wrap2 wow fadeInUpX" data-wow-delay="0.20s">
							<div className="fugu-iconbox-icon2">
								<h2>💼</h2>
							</div>
							<div className="fugu-iconbox-data2">
								<h3 style={{textAlign: "center"}}>Career</h3>
								<p>
								Explore an exciting and rewarding path with low competition, flexibility, and high growth potential to start in or hop to.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
						<div className="fugu-iconbox-wrap2 wow fadeInUpX" data-wow-delay="0.30s">
							<div className="fugu-iconbox-icon2">
								<h2>👩‍👩‍👧‍👦</h2>
							</div>
							<div className="fugu-iconbox-data2">
								<h3 style={{textAlign: "center"}}>Community</h3>
								<p>
								Feel the joy of being in a web3 community bringing contribution, opportunities, and support!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
