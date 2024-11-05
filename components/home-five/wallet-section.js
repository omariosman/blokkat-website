/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Accordion } from "react-bootstrap";
export default function WalletSection() {
	return (
		<div className="fugu--content-section">
			<div className="container">
				<div className="fugu--content-top">
					<div className="row">
						<div className="col-xl-6 d-flex justify-content-center align-items-center order-xl-2">
							<div className="fugu--content-thumb">
								<img
									className="wow fadeInUpX"
									data-wow-delay=".10s"
									src="/images/all-img/v5/thumb.png"
									alt=""
								/>
								<div className="fugu--circle-shape circle-three">
									<img src="/images/all-img/shapes-round.png" alt="" />
									<div className="waves wave-1"></div>
								</div>
								<div className="fugu--circle-shape circle-four">
									<img src="/images/all-img/shapes-round.png" alt="" />
									<div className="waves wave-1"></div>
								</div>
							</div>
						</div>
						<div className="col-xl-6">
							<div className="fugu--default-content">
								<h2>In the crypto world, we are secure & trustworthy</h2>
								<p>
									Fugu is one of the largest and safest platforms out there. The best crypto wallets
									provide a good mix of security tools and user-facing features at a reasonable cost.
								</p>
								<div className="fugu--meta">
									<ul>
										<li>
											<img src="/images/svg2/check.svg" alt="" />
											Cost-effective mode of transaction secure and private.
										</li>
										<li>
											<img src="/images/svg2/check.svg" alt="" />
											Self-governed managed all and easy transfer of funds.
										</li>
										<li>
											<img src="/images/svg2/check.svg" alt="" />
											Currency exchanges finish smoothly and decentralized.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="fugu--content-bottom">
					<div className="row">
						<div className="col-xl-6 d-flex align-items-center">
							<div className="fugu--content-thumb">
								<img
									className="wow fadeInLeft"
									data-wow-delay=".10s"
									src="/images/all-img/v5/thumb2.png"
									alt=""
								/>
								<div className="fugu--bitcoin">
									<img src="/images/all-img/v5/bitcoin4.png" alt="" />
								</div>
								<div className="fugu--content-shape">
									<img src="/images/shape2/shape-video.png" alt="" />
								</div>
							</div>
						</div>
						<div className="col-xl-6">
							<div className="fugu--default-content">
								<h2>Easy step to use Fugu wallet on any device</h2>
								<p>
									While the concept is simple a place to store your crypto & use choosing Fugu crypto
									wallet can be an incredibly experience.
								</p>
								<div className="fugu--accordion-one accordion-two" id="accordionExample">
									<Accordion defaultActiveKey="0">
										<Accordion.Item eventKey="0">
											<Accordion.Header>Create your wallet</Accordion.Header>
											<Accordion.Body>
												Fugu just like any other digital wallet, a crypto wallet helps users
												store, send & receive easily
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="1">
											<Accordion.Header>Link your bank account</Accordion.Header>
											<Accordion.Body>
												Fugu just like any other digital wallet, a crypto wallet helps users
												store, send & receive easily
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="2">
											<Accordion.Header>WStart buying & selling crypto</Accordion.Header>
											<Accordion.Body>
												Fugu just like any other digital wallet, a crypto wallet helps users
												store, send & receive easily
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
								</div>
								<div className="fugu--btn-wrap">
									<Link href={"#"} legacyBehavior>
										<a className="fugu--btn bg-blue">Go To Exchanges</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
