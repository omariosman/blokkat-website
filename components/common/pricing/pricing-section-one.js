/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
export default function PricingSectionOne() {
	const [toggleBilled, setToggleBilled] = useState(false);

	const toggleClass = () => {
		setToggleBilled(!toggleBilled);
	};
	return (
		<div className="section bg-warning-300 fugu-section-padding2">
			<div className="container">
				<div className="fugu-section-title">
					<h2>
						Fast and affordable
						<br />
						plans to get started
					</h2>
				</div>
				<div className="pricing-btn d-flex align-items-center justify-content-center flex-wrap">
					<label className="mb-3 mb-lg-0">Billed Annually</label>
					<div className=" form-check form-switch mb-2 mb-lg-0" onClick={toggleClass}>
						<input
							className="form-check-input btn-toggle price-deck-trigger mb-2 mb-lg-0"
							type="checkbox"
						/>
					</div>
					<label className="mb-3 mb-lg-0">Billed Monthly</label>
				</div>
				<div className="row" id="table-price-value" data-pricing-dynamic data-value-active="monthly">
					<div className="col-lg-4 col-md-6">
						<div className="fugu-pricing-wrap wow fadeInUpX" data-wow-delay=".10s">
							<div className="fugu-pricing-header">
								<h5>Basic</h5>
								<p>Suitable for small companies and personal use</p>
							</div>
							<div className="fugu-pricing-price">
								<span className="fugu-pricing-currency">$</span>
								<div className="fugu-price">{toggleBilled ? "99" : "19"}</div>
								<p className="bottom_text">{toggleBilled ? "/m" : "/y"}</p>
							</div>
							<Link href={"#"}>Choose the plan</Link>
							<div className="fugu-pricing-body">
								<ul>
									<li>
										<img src="/images/svg/check3.svg" alt="" />
										Web trading free only mobile apps
									</li>
									<li>
										<img src="/images/svg/check3.svg" alt="" />
										Regulatory transaction fee available
									</li>
									<li>
										<img src="/images/svg/check3.svg" alt="" />
										Securities and exchange (Buy only)
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="fugu-pricing-wrap wow fadeInUpX active" data-wow-delay=".10s">
							<div className="fugu-pricing-header">
								<h5>Standard</h5>
								<p>Suitable for small companies and personal use</p>
							</div>
							<div className="fugu-pricing-price">
								<span className="fugu-pricing-currency">$</span>
								<div className="fugu-price">{toggleBilled ? "199" : "89"}</div>
								<p className="bottom_text">{toggleBilled ? "/m" : "/y"}</p>
							</div>
							<Link href={"#"}>Choose the plan</Link>
							<div className="fugu-pricing-body">
								<ul>
									<li>
										<img src="/images/svg/check4.svg" alt="" />
										Web trading free mobile and desktop
									</li>
									<li>
										<img src="/images/svg/check4.svg" alt="" />
										Regulatory transaction fee available
									</li>
									<li>
										<img src="/images/svg/check4.svg" alt="" />
										Financial industry regulator (Buy only)
									</li>
								</ul>
							</div>
							<div className="fugu-pricing-label">Popular</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="fugu-pricing-wrap wow fadeInUpX" data-wow-delay=".20s">
							<div className="fugu-pricing-header">
								<h5>Premium</h5>
								<p>Suitable for small companies and personal use</p>
							</div>
							<div className="fugu-pricing-price">
								<span className="fugu-pricing-currency">$</span>
								<div className="fugu-price">{toggleBilled ? "299" : "199"}</div>
								<p className="bottom_text">{toggleBilled ? "/m" : "/y"}</p>
							</div>
							<Link href={"#"}>Choose the plan</Link>
							<div className="fugu-pricing-body">
								<ul>
									<li>
										<img src="/images/svg/check3.svg" alt="" />
										Web trading free only mobile apps
									</li>
									<li>
										<img src="/images/svg/check3.svg" alt="" />
										Regulatory transaction fee available
									</li>
									<li>
										<img src="/images/svg/check3.svg" alt="" />
										Options clearing corp (Buys & Sells)
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
