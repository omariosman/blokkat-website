/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function FaqHomeOne() {
	return (
		<div className="section bg-warning-300 fugu-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 position-relative">
						<div className="fugu-default-content large-content">
							<h2>Frequently asked questions</h2>
							<p>
								Frequently asked questions about our crypto currency app. The crypto security for
								conducting trusted transactions.
							</p>

							<Link href={"/contact"} legacyBehavior>
								<a className="fugu-faq-btn">Don't find the answer? Contact us here</a>
							</Link>
						</div>
					</div>

					<div className="col-lg-5 offset-lg-2">
						<div className="fugu-accordion-wrap">
							<div className="fugu-accordion-item">
								<h4>Is it safe to use crypto app?</h4>
								<p>
									Yes, Fugu crypto app and Coinbase are safe and use security measures that are
									industry-standard or above for U.S.-based.
								</p>
							</div>
							<div className="fugu-accordion-item">
								<h4>How do I connect fugu to my crypto wallet?</h4>
								<p>
									Once you ve approved a connection request from the app the fugu can send transaction
									requests to wallet, which is the on your must also manually approve in the Wallet.
								</p>
							</div>
							<div className="fugu-accordion-item">
								<h4>How do you make money with crypto app?</h4>
								<p>
									This is the most common way of earning money from crypto currencies. Investors buy
									coins such as Bitcoin, Litecoin, and Ethereum, Ripple, and more and wait until their
									value rises.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
