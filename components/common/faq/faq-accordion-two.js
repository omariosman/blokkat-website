/* eslint-disable @next/next/no-img-element */

import { Accordion } from "react-bootstrap";
export default function FaqAccordionTwo() {
	return (
		<div className="fugu--faq-section2 fugu--section-padding-bottom">
			<div className="container">
				<div className="fugu--section-title">
					<div className="fugu--default-content">
						<h2>Do you have any questions about cryptocurrency? Ask us</h2>
						<p>
							Frequently asked questions qbout cryptocurrency & blockchain technology. Cryptographic
							security for conducting trusted transactions.
						</p>
					</div>
				</div>
				<div className="fugu--accordion-one accordion-three" id="accordionExample2">
					<div className="row">
						<div className="col-lg-6">
							<Accordion defaultActiveKey="0">
								<Accordion.Item eventKey="0">
									<Accordion.Header>Q. What is cryptocurrency in general?</Accordion.Header>
									<Accordion.Body>
										A cryptocurrency is a digital currency, which is an alternative form of payment
										created using encryption algorithms.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>
										Q. What other types of cryptocurrency are out there?
									</Accordion.Header>
									<Accordion.Body>
										A cryptocurrency is a digital currency, which is an alternative form of payment
										created using encryption algorithms.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>Q. What’s the connection between NFTs & crypto?</Accordion.Header>
									<Accordion.Body>
										A cryptocurrency is a digital currency, which is an alternative form of payment
										created using encryption algorithms.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
						<div className="col-lg-6">
							<Accordion>
								<Accordion.Item eventKey="0">
									<Accordion.Header>Q. How safe is cryptocurrency?</Accordion.Header>
									<Accordion.Body>
										A cryptocurrency is a digital currency, which is an alternative form of payment
										created using encryption algorithms.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>
										Q. What regulation and requirements govern bitcoin?
									</Accordion.Header>
									<Accordion.Body>
										A cryptocurrency is a digital currency, which is an alternative form of payment
										created using encryption algorithms.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>What’s the connection between NFTs & crypto?</Accordion.Header>
									<Accordion.Body>
										A cryptocurrency is a digital currency, which is an alternative form of payment
										created using encryption algorithms.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
					</div>
				</div>
			</div>
			<div className="fugu--circle-shape circle-five">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
			<div className="fugu--circle-shape circle-six">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
			<div className="fugu--circle-shape circle-seven">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
		</div>
	);
}
