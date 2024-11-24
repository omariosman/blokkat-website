import { Accordion } from "react-bootstrap";
export default function FaqAccordionOne() {
	return (
		<div className="fugu--faq-section fugu--section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="fugu--default-content content-black">
							<h2>Frequently asked questions</h2>
						</div>
					</div>
					<div className="col-lg-7 offset-lg-1">
						<div className="fugu--accordion-one">
							<Accordion defaultActiveKey="0">
								<Accordion.Item eventKey="0">
									<Accordion.Header>What is Blokkat?</Accordion.Header>
									<Accordion.Body>
										Blokkat is a community dedicated to educating and enabling Arabic speakers about blockchain technology and web3.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>Who can join Blokkat?</Accordion.Header>
									<Accordion.Body>
										Anyone interested in blockchain is welcome to join Blokkat! Whether you're a beginner looking to learn more about the basics of blockchain and how you can utilize it or a developer wanting to dive deep. Developers, Entrepreneurs, Artists, Legal, and others! Everybody is welcome!
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>How can I participate in Blokkat's events and workshops?</Accordion.Header>
									<Accordion.Body>
										Join our telegram group and follow us on social media. We announce all of our events and recurring meetups/workshops there!
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="3">
									<Accordion.Header>Do I need prior knowledge of blockchain to join?</Accordion.Header>
									<Accordion.Body>							
										Not at all! We welcome beginners with 0 experience and actually cater content to them.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="4">
									<Accordion.Header>Why should I join?</Accordion.Header>
									<Accordion.Body>
										If you want to learn more about blockchain technology, upskill yourself technically, want to engage in discussions about interesting web3 projects, want to learn about blockchain use cases in business, seek guidance in web3 career, want to get exposed to opportunities, want to network with others, or just want to make friends, you’d want to join Blokkat!
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="5">
									<Accordion.Header>How can I contribute to Blokkat?</Accordion.Header>
									<Accordion.Body>
										We are always seeking volunteers and welcome contributors who want to assist technically, with designs, with business development, social media, just to name a few. Reach out to us, we already have some vacancies.
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
