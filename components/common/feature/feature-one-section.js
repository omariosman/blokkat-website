/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function FeatureOneSection() {
	return (
		<div className="section bg-warning-200 fugu-section-padding3">
			<div className="container">
				<div className="fugu-section-title">
					<h2>Our Values</h2>
				</div>
				<div className="row fugu-iconbox-container">
					<div className="col-lg-4 col-md-6">
						<div className="fugu-iconbox-wrap2 wow fadeInUpX" data-wow-delay="0s">
							<div className="fugu-iconbox-icon2">
								<img src="/images/all-img/v2/icon1.png" alt="" />
							</div>
							<div className="fugu-iconbox-data2">
								<h4>Progress Over Perfectionism</h4>
								<p>
									At Blokkat, we prioritize progress, not perfection. We encourage our community to learn, apply their knowledge, create, and break things and learn along the way, knowing that small, consistent steps lead to meaningful growth and true impact.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="fugu-iconbox-wrap2 wow fadeInUpX" data-wow-delay="0.20s">
							<div className="fugu-iconbox-icon2">
								<img src="/images/all-img/v2/icon2.png" alt="" />
							</div>
							<div className="fugu-iconbox-data2">
								<h4>Curiosity and Lifelong Learning</h4>
								<p>
									At Blokkat, we champion learning something new every day. We believe that curiosity and the continuous cycle of learning, applying, and sharing knowledge is the foundation of growth. We encourage our community to embrace change, stay informed, and build a habit of evolving with the ever-changing world of Web3.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
						<div className="fugu-iconbox-wrap2 wow fadeInUpX" data-wow-delay="0.30s">
							<div className="fugu-iconbox-icon2">
								<img src="/images/all-img/v2/icon3.png" alt="" />
							</div>
							<div className="fugu-iconbox-data2">
								<h4>Authenticity and Honesty</h4>
								<p>
									At Blokkat, we prioritize being real and honest in everything we do. We foster trust within our community by listening genuinely, communicating clearly, and maintaining transparency. We encourage our community to stay honest and real with everything they do.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
