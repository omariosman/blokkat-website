import { Accordion } from "react-bootstrap";

export default function FaqAccordionThree() {
	return (
		<div className="fugu--faq-section dark-version fugu--section-padding">
			<div className="container">
				<div className="fugu--section-title">
					<div className="fugu--default-content content-sm">
						<h2>If you need to know anything about NFTs, just ask us!</h2>
					</div>
				</div>
				<div className="fugu--accordion-one accordion-four" id="accordionExample">
					<Accordion defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>What is an NFT?</Accordion.Header>
							<Accordion.Body>
								At the most basic level, a non-fungible token is a one-of-a-kind, verifiable digital
								asset that can be exchanged between a creator and a buyer.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>What makes an NFT valuable?</Accordion.Header>
							<Accordion.Body>
								At the most basic level, a non-fungible token is a one-of-a-kind, verifiable digital
								asset that can be exchanged between a creator and a buyer.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>What’s the connection between NFTs & crypto?</Accordion.Header>
							<Accordion.Body>
								At the most basic level, a non-fungible token is a one-of-a-kind, verifiable digital
								asset that can be exchanged between a creator and a buyer.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>Are NFTs the future of art and collectibles?</Accordion.Header>
							<Accordion.Body>
								At the most basic level, a non-fungible token is a one-of-a-kind, verifiable digital
								asset that can be exchanged between a creator and a buyer.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>What questions remain about NFTs?</Accordion.Header>
							<Accordion.Body>
								At the most basic level, a non-fungible token is a one-of-a-kind, verifiable digital
								asset that can be exchanged between a creator and a buyer.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
			</div>
		</div>
	);
}
