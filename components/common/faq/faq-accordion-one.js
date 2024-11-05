import { Accordion } from "react-bootstrap";
export default function FaqAccordionOne() {
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
						<div className="fugu--accordion-one">
							<Accordion defaultActiveKey="0">
								<Accordion.Item eventKey="0">
									<Accordion.Header>What is an NFT?</Accordion.Header>
									<Accordion.Body>
										At the most basic level, a non-fungible token is a one-of-a-kind, verifiable
										digital asset that can be exchanged between a creator and a buyer.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>What makes an NFT valuable?</Accordion.Header>
									<Accordion.Body>
										At the most basic level, a non-fungible token is a one-of-a-kind, verifiable
										digital asset that can be exchanged between a creator and a buyer.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>What’s the connection between NFTs & crypto?</Accordion.Header>
									<Accordion.Body>
										At the most basic level, a non-fungible token is a one-of-a-kind, verifiable
										digital asset that can be exchanged between a creator and a buyer.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="3">
									<Accordion.Header>Are NFTs the future of art and collectibles?</Accordion.Header>
									<Accordion.Body>
										At the most basic level, a non-fungible token is a one-of-a-kind, verifiable
										digital asset that can be exchanged between a creator and a buyer.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="4">
									<Accordion.Header>What questions remain about NFTs?</Accordion.Header>
									<Accordion.Body>
										At the most basic level, a non-fungible token is a one-of-a-kind, verifiable
										digital asset that can be exchanged between a creator and a buyer.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
