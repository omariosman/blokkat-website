/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
export default function PricingSectionTwo() {
	const [toggleBilled, setToggleBilled] = useState(false);

	const toggleClass = () => {
		setToggleBilled(!toggleBilled);
	};
	return (
		<div className="section fugu-section-padding3">
			<div className="container">
				<div className="fugu-section-title">
					<h2>Strategy pricing plans that we offer to our clients</h2>
				</div>
				<div className="pricing-btn d-flex align-items-center justify-content-center flex-wrap ">
					<label className="mb-3 mb-lg-0">Billed Annually</label>
					<div className="toggle-btn form-check form-switch  mb-2 mb-lg-0" onClick={toggleClass}>
						<input
							className="form-check-input btn-toggle price-deck-trigger mb-2 mb-lg-0"
							type="checkbox"
						/>
					</div>
					<label className="mb-3 mb-lg-0">Billed Monthly</label>
				</div>
				<div className="row" id="table-price-value" data-pricing-dynamic data-value-active="monthly">
					<div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
						<div className="fugu-pricing-wrap fugu-pricing-wrap3 wow fadeInUpX" data-wow-delay="0s">
							<div className="fugu-pricing-header">
								<h5>Basic</h5>
							</div>
							<div className="fugu-pricing-price">
								<span className="fugu-pricing-currency">$</span>
								<div className="fugu-price">{toggleBilled ? "99" : "29"}</div>
								<p className="bottom_text">{toggleBilled ? "/m" : "/y"}</p>
							</div>
							<p>Suitable for small companies and personal use</p>
							<div className="fugu-pricing-body">
								<span>What you get:</span>
								<ul>
									<li>
										<img src="/images/svg/check5.svg" alt="" />
										Real-time crypto trading
									</li>
									<li>
										<img src="/images/svg/check5.svg" alt="" />
										1-year standard support
									</li>
									<li>
										<img src="/images/svg/check5.svg" alt="" />
										Trading up to $100K
									</li>
									<li className="disable">
										<img src="/images/svg/check5.svg" alt="" />
										10 GB Disk space
									</li>
									<li className="disable">
										<img src="/images/svg/check5.svg" alt="" />
										Free custom domain
									</li>
								</ul>
							</div>
							<Link href={"#"} legacyBehavior>
								<a className="fugu-pricing-btn">Choose the plan</a>
							</Link>
						</div>
					</div>
					<div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
						<div className="fugu-pricing-wrap fugu-pricing-wrap3 wow fadeInUpX" data-wow-delay=".10s">
							<div className="fugu-pricing-header">
								<h5>Starter Plan</h5>
							</div>
							<div className="fugu-pricing-price">
								<span className="fugu-pricing-currency">$</span>
								<div className="fugu-price">{toggleBilled ? "199" : "19"}</div>
								<p className="bottom_text">{toggleBilled ? "/m" : "/y"}</p>
							</div>
							<p>Suitable for small companies and personal use</p>
							<div className="fugu-pricing-body">
								<span>What you get:</span>
								<ul>
									<li>
										<img src="/images/svg/check5.svg" alt="" />
										Real-time crypto trading
									</li>
									<li>
										<img src="/images/svg/check5.svg" alt="" />
										5-year standard support
									</li>
									<li>
										<img src="/images/svg/check5.svg" alt="" />
										Trading up to $500K
									</li>
									<li>
										<img src="/images/svg/check5.svg" alt="" />
										10 GB Disk space
									</li>
									<li className="disable">
										<img src="/images/svg/check5.svg" alt="" />
										Free custom domain
									</li>
								</ul>
							</div>
							<Link href={"#"} legacyBehavior>
								<a className="fugu-pricing-btn">Choose the plan</a>
							</Link>
						</div>
					</div>
					<div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
						<div className="fugu-pricing-wrap fugu-pricing-wrap3 wow fadeInUpX" data-wow-delay=".20s">
							<div className="fugu-pricing-header">
								<h5>Professional Plan</h5>
							</div>
							<div className="fugu-pricing-price">
								<span className="fugu-pricing-currency">$</span>
								<div className="fugu-price">{toggleBilled ? "249" : "49"}</div>
								<p className="bottom_text">{toggleBilled ? "/m" : "/y"}</p>
							</div>
							<p>Suitable for small companies and personal use</p>
							<div className="fugu-pricing-body">
								<span>What you get:</span>
								<ul>
									<li>
										<img src="/images/svg/check5.svg" alt="" />
										Real-time crypto trading
									</li>
									<li>
										<img src="/images/svg/check5.svg" alt="" />
										10-year standard support
									</li>
									<li>
										<img src="/images/svg/check5.svg" alt="" />
										Trading up to $800K
									</li>
									<li>
										<img src="/images/svg/check5.svg" alt="" />
										50 GB Disk space
									</li>
									<li className="disable">
										<img src="/images/svg/check5.svg" alt="" />
										Free custom domain
									</li>
								</ul>
							</div>
							<Link href={"#"} legacyBehavior>
								<a className="fugu-pricing-btn">Choose the plan</a>
							</Link>
						</div>
					</div>
					<div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
						<div className="fugu-pricing-wrap fugu-pricing-wrap3 wow fadeInUpX" data-wow-delay=".30s">
							<div className="fugu-pricing-header">
								<h5>Exclusive Plan</h5>
							</div>
							<div className="fugu-pricing-price">
								<span className="fugu-pricing-currency">$</span>
								<div className="fugu-price">{toggleBilled ? "199" : "99"}</div>
								<p className="bottom_text">{toggleBilled ? "/m" : "/y"}</p>
							</div>
							<p>Suitable for small companies and personal use</p>
							<div className="fugu-pricing-body">
								<span>What you get:</span>
								<ul>
									<li>
										<img src="/images/svg/check5.svg" alt="" />
										Real-time crypto trading
									</li>
									<li>
										<img src="/images/svg/check5.svg" alt="" />
										Unlimited standard support
									</li>
									<li>
										<img src="/images/svg/check5.svg" alt="" />
										Trading up to $1000K
									</li>
									<li>
										<img src="/images/svg/check5.svg" alt="" />
										100 GB Disk space
									</li>
									<li>
										<img src="/images/svg/check5.svg" alt="" />
										Free custom domain
									</li>
								</ul>
							</div>
							<Link href={"#"} legacyBehavior>
								<a className="fugu-pricing-btn">Choose the plan</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
