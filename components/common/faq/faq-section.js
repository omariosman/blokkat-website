import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function FaqSection() {
	return (
		<div className="section bg-warning-300 fugu-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 position-relative">
						<div className="fugu-default-content">
							<h2>Ask if you have any questions about us.</h2>
							<p>We are ready to answer all your questions. Ask us any questions you may have.</p>
							<Link href={"/contact"} legacyBehavior>
								<a className="fugu-faq-btn">Don't find the answer? Contact us here</a>
							</Link>
						</div>
					</div>
					<div className="col-lg-6 offset-lg-1">
						<div className="fugu-accordion-wrap">
							<div className="fugu-accordion-item">
								<h4>Is it safe to use crypto app?</h4>
								<p>
									There are many variations of passages of Lorem Ipsum available, but the majority
									have suffered alteration in some form, by injected humour of this.
								</p>
							</div>
							<div className="fugu-accordion-item">
								<h4>Do you provide any moneyback guarantee?</h4>
								<p>
									Once you've approved a connection request from the app the fugu can to send
									transaction requests to wallet, which is the on your must also have manually approve
									in the Wallet easily provided.
								</p>
							</div>
							<div className="fugu-accordion-item">
								<h4>How long do you provide supports plugins?</h4>
								<p>
									It has survived not only five centuries, but also the leap into electronic for the
									support do you want typesetting, remaining essentially unchanged.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
