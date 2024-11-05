/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function FeatureOneSection() {
	return (
		<div className="section bg-warning-200 fugu-section-padding3">
			<div className="container">
				<div className="fugu-section-title">
					<h2>Secure solutions for your digital and money</h2>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="fugu-iconbox-wrap2 wow fadeInUpX" data-wow-delay="0s">
							<div className="fugu-iconbox-icon2">
								<img src="/images/all-img/v2/icon1.png" alt="" />
							</div>
							<div className="fugu-iconbox-data2">
								<h4>User friendly dashboard</h4>
								<p>
									Every user controls the data they wish to see as well as the dashboard's structure.
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
								<h4>Secure and fast payments</h4>
								<p>
									Every user controls the data they wish to see as well as the dashboard's structure.
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
								<h4>A wallet you can trust</h4>
								<p>
									Every user controls the data they wish to see as well as the dashboard's structure.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
