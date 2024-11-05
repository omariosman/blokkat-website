export default function FaqSection() {
	return (
		<div className="fugu--faq-section fugu--section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="fugu--default-content content-black">
							<h2>Frequently asked questions</h2>
							<p>
								FAQ used to refer to a list of answers to typical NFTs questions that users might ask.
							</p>
						</div>
					</div>
					<div className="col-lg-7 offset-lg-1">
						<div className="fugu--accordion-one" id="accordionExample">
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingOne">
									<button
										className="accordion-button"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseOne"
										aria-expanded="true"
										aria-controls="collapseOne"
									>
										What is an NFT?
									</button>
								</h2>
								<div
									id="collapseOne"
									className="accordion-collapse collapse show"
									aria-labelledby="headingOne"
									data-bs-parent="#accordionExample"
								>
									<div className="accordion-body">
										At the most basic level, a non-fungible token is a one-of-a-kind, verifiable
										digital asset that can be exchanged between a creator and a buyer.
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingTwo">
									<button
										className="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseTwo"
										aria-expanded="false"
										aria-controls="collapseTwo"
									>
										What makes an NFT valuable?
									</button>
								</h2>
								<div
									id="collapseTwo"
									className="accordion-collapse collapse"
									aria-labelledby="headingTwo"
									data-bs-parent="#accordionExample"
								>
									<div className="accordion-body">
										At the most basic level, a non-fungible token is a one-of-a-kind, verifiable
										digital asset that can be exchanged between a creator and a buyer.
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingThree">
									<button
										className="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseThree"
										aria-expanded="false"
										aria-controls="collapseThree"
									>
										What’s the connection between NFTs & crypto?
									</button>
								</h2>
								<div
									id="collapseThree"
									className="accordion-collapse collapse"
									aria-labelledby="headingThree"
									data-bs-parent="#accordionExample"
								>
									<div className="accordion-body">
										At the most basic level, a non-fungible token is a one-of-a-kind, verifiable
										digital asset that can be exchanged between a creator and a buyer.
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingFour">
									<button
										className="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseFour"
										aria-expanded="false"
										aria-controls="collapseFour"
									>
										Are NFTs the future of art and collectibles?
									</button>
								</h2>
								<div
									id="collapseFour"
									className="accordion-collapse collapse"
									aria-labelledby="headingFour"
									data-bs-parent="#accordionExample"
								>
									<div className="accordion-body">
										At the most basic level, a non-fungible token is a one-of-a-kind, verifiable
										digital asset that can be exchanged between a creator and a buyer.
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingFive">
									<button
										className="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseFive"
										aria-expanded="false"
										aria-controls="collapseFive"
									>
										What questions remain about NFTs?
									</button>
								</h2>
								<div
									id="collapseFive"
									className="accordion-collapse collapse"
									aria-labelledby="headingFive"
									data-bs-parent="#accordionExample"
								>
									<div className="accordion-body">
										At the most basic level, a non-fungible token is a one-of-a-kind, verifiable
										digital asset that can be exchanged between a creator and a buyer.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
