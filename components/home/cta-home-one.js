/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function CtaHomeOne() {
	return (
		<div className="fugu-cta-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="fugu-default-content large-content">
							<h2>Download now to invest crypto safely</h2>
						</div>
					</div>
					<div className="col-lg-6 d-flex align-items-center">
						<div className="fugu-cta-app-btn-wrap">
							<Link href={"contact"} legacyBehavior>
								<a className="fugu-app-btn wow fadeInUpX" data-wow-delay="0s">
									<img src="/images/all-img/app-store.png" alt="" />
								</a>
							</Link>
							<Link href={"contact"} legacyBehavior>
								<a className="fugu-app-btn wow fadeInUpX" data-wow-delay=".20s">
									<img src="/images/all-img/play-store.png" alt="" />
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
