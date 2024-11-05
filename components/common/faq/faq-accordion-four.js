/* eslint-disable @next/next/no-img-element */
import { Accordion } from "react-bootstrap";

export default function FaqAccordionFour() {
	return (
		<div className="fugu--faq-section fugu--section-padding white-version">
			<div className="container">
				<div className="fugu--section-title">
					<div className="fugu--default-content content-sm content-black">
						<h2>If you need to know anything about NFTs, just ask us!</h2>
					</div>
				</div>
				<div className="fugu--accordion-one accordion-five">
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
