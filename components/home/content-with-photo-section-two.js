/* eslint-disable @next/next/no-img-element */

export default function ContentWithPhotoSectionTwo() {
	return (
		<div className="section bg-warning-300 fugu-section-padding z-index">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div
							className="fugu-apps-thumb fugu-apps-thumb2"
							id="rotatethree"
							style={{ transform: "rotate(0deg)" }}
						>
							<img
								className="wow fadeInUpX"
								data-wow-delay=".10s"
								src="/images/all-img/mocup2.png"
								alt=""
							/>
						</div>
					</div>
					<div className="col-lg-6 col-md-10 d-flex align-items-center">
						<div className="fugu-default-content large-content">
							<h2>Open an account in 3 easy steps</h2>
							<p>
								Become a better investor on the go, right in the app. Join a new generation of crypto
								investors. Easy interface to create an account.
							</p>
							<div className="fugu-icon-list2">
								<ul>
									<li>
										<div className="fulo-list-icon">
											<img src="/images/svg/download.svg" alt="" />
										</div>
										<h4>Download and create an account easily</h4>
										<p>Download it through Google Play or the App Store easy.</p>
									</li>
									<li>
										<div className="fulo-list-icon">
											<img src="/images/svg/link.svg" alt="" />
										</div>
										<h4>Link your bank account & make a payment</h4>
										<p>Add a personal checking account at the bottom of link.</p>
									</li>
									<li>
										<div className="fulo-list-icon">
											<img src="/images/svg/lightning-bolt.svg" alt="" />
										</div>
										<h4>Start buying & selling crypto as you wish</h4>
										<p>Although many people prefer to apply the buy and hold.</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="fugu-shape3">
				<img src="/images/shape/shape2.png" alt="" />
			</div>
		</div>
	);
}
