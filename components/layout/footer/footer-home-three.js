/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function FooterHomeThree() {
	return (
		<footer className="fugu--footer-section">
			<div className="container">
				<div className="fugu--footer-top">
					<div className="row">
						<div className="col-lg-3">
							<div className="fugu--textarea">
								<div className="fugu--footer-logo">
									<img src="/images/logo/logo-white.svg" alt="" className="light-version-logo" />
								</div>
								<p>
									Discover NFTs by category, track the latest drops, and follow the collections you
									love to enjoy it!
								</p>
								<div className="fugu--social-icon">
									<ul>
										<li>
											<Link href="#">
												<img src="/images/social2/twitter.svg" alt="" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<img src="/images/social2/facebook.svg" alt="" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<img src="/images/social2/instagram.svg" alt="" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<img src="/images/social2/github.svg" alt="" />
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-2 offset-lg-1 col-md-4 col-sm-4">
							<div className="fugu--footer-menu">
								<span>Marketplace</span>
								<ul>
									<li>
										<Link href="#">Create A Store </Link>
									</li>
									<li>
										<Link href="#">Start Selling </Link>
									</li>
									<li>
										<Link href="#">My Account </Link>
									</li>
									<li>
										<Link href="#">Job </Link>
									</li>
									<li>
										<Link href="#">List a Item </Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 offset-lg-1 col-md-4 col-sm-4">
							<div className="fugu--footer-menu">
								<span>Marketplace</span>
								<ul>
									<li>
										<Link href="#">Art </Link>
									</li>
									<li>
										<Link href="#">Digital Art </Link>
									</li>
									<li>
										<Link href="#">Photography </Link>
									</li>
									<li>
										<Link href="#">Games </Link>
									</li>
									<li>
										<Link href="#">Music </Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 offset-lg-1 col-md-4 col-sm-4">
							<div className="fugu--footer-menu">
								<span>Marketplace</span>
								<ul>
									<li>
										<Link href="#">Explore NFTs </Link>
									</li>
									<li>
										<Link href="#">Platform Status </Link>
									</li>
									<li>
										<Link href="#">Help center </Link>
									</li>
									<li>
										<Link href="#">Partners </Link>
									</li>
									<li>
										<Link href="#">Marketplace </Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="fugu--footer-bottom">
					assets <p>&copy; Copyright 2022, All Rights Reserved by Mthemeus</p>
					<div className="fugu--footer-menu">
						<ul>
							<li>
								<Link href="#">Terms </Link>
							</li>
							<li>
								<Link href="#"> Privacy Policy </Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
