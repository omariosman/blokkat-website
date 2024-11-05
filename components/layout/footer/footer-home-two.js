/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function FooterHomeTwo() {
	return (
		<footer className="fugu-foote2-section">
			<div className="container">
				<div className="fugu-footer-top">
					<div className="fugu-default-content">
						<h2 className="wow fadeInUpX" data-wow-delay="0s">
							Ready for an innovative trading strategy? Let's start now!
						</h2>
						<p className="wow fadeInUpX" data-wow-delay="0.15s">
							Get start now! And buy and sell cryptocurrency It simplifies the process of buying and
							selling digital from anywhere in the world.
						</p>
						<div className="fugu-app-btn-wrap wow fadeInUpX" data-wow-delay="0.25s">
							<Link href={"contact"} legacyBehavior>
								<a className="fugu-app-btn">
									<img src="/images/all-img/app-store.png" alt="" />
								</a>
							</Link>
							<Link href={"contact"} legacyBehavior>
								<a className="fugu-app-btn">
									<img src="/images/all-img/play-store.png" alt="" />
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="fugu-footer-middle">
					<div className="row">
						<div className="col-xl-2 col-lg-2">
							<div className="fugu-footer-logo">
								<img src="/images/logo/logo-white.svg" alt="" />
							</div>
						</div>
						<div className="col-xl-7 col-lg-8">
							<div className="fugu-footer-menu2">
								<ul>
									<li>
										<Link href={"#"}> Demos </Link>
									</li>
									<li>
										<Link href={"#"}> About Us </Link>
									</li>
									<li>
										<Link href={"#"}> Collections </Link>
									</li>
									<li>
										<Link href={"#"}> Pages </Link>
									</li>
									<li>
										<Link href={"#"}> Contact </Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-lg-2">
							<Link href="mailto:name@email.com" legacyBehavior>
								<a className="fugu-email">
									<img src="/images/svg/eamil.svg" alt="" />
									info@example.com
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="fugu-footer-bottom">
					<div className="row">
						<div className="col-lg-6 col-md-8">
							<p>&copy; Copyright 2022, All Rights Reserved by Mthemeus</p>
						</div>
						<div className="col-lg-6 col-md-4">
							<div className="fugu-footer-menu">
								<ul>
									<li>
										<Link href={"#"}> Terms </Link>
									</li>
									<li>
										<Link href={"#"}> Privacy Policy </Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
