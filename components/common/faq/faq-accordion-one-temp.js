import { Accordion } from "react-bootstrap";
export default function FaqAccordionOne() {
	return (
		<div className="fugu--faq-section fugu--section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="fugu--default-content content-white">
							<h2>Frequently asked questions</h2>
						</div>
					</div>
					<div className="col-lg-7 offset-lg-1">
						<div className="fugu--accordion-one">
							<Accordion defaultActiveKey="0">
								<Accordion.Item eventKey="0">
									<Accordion.Header>Who is this bootcamp for?</Accordion.Header>
									<Accordion.Body>
									Developers of all levels of experiences and CS students. It is ideal for fullstack, backend, frontend, mobile, systems developers (in that order).
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>I am not a developer can I join?</Accordion.Header>
									<Accordion.Body>
										Anyone can join if they have programming fundamentals and know how to code in any language (OOD).
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>Is there a certificate?</Accordion.Header>
									<Accordion.Body>
										Yes, we will issue NFT certificate to your name as soon as you meet graduation requirements and have your work on your github.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="3">
									<Accordion.Header>When does the bootcamp start?</Accordion.Header>
									<Accordion.Body>	
										February 15th 2025						
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="4">
									<Accordion.Header>Where is the bootcamp held?</Accordion.Header>
									<Accordion.Body>
										Online
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="5">
									<Accordion.Header>Is this bootcamp free?</Accordion.Header>
									<Accordion.Body>
										Yes, the bootcamp is completely free for all students.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="6">
									<Accordion.Header>Is the bootcamp 100% in Arabic?</Accordion.Header>
									<Accordion.Body>
										The bootcamp will be fully explained in Arabic. However, concepts and definitions will be in both Arabic and English to help you contribute to the global ecosystem.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="7">
									<Accordion.Header>Do I need prior experience?</Accordion.Header>
									<Accordion.Body>
										With blockchains? no, with programming essentials? yes.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="8">
									<Accordion.Header>Are there internships after the bootcamp?</Accordion.Header>
									<Accordion.Body>
										Internship opportunities will be presented to bootcamp participants. We do not guarantee places in internship programs. We will help you be prepared for them with skills and knowledge, but companies will still do their assesments.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="9">
									<Accordion.Header>Will there be access to extra resources and guidance to students?</Accordion.Header>
									<Accordion.Body>
										Yes, beside the course materials, we’ll offer guidance to students navigating certain paths and offer them materials and opportunities.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="10">
									<Accordion.Header>When does registration close?</Accordion.Header>
									<Accordion.Body>
										February 15th 11:59 pm UTC time
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="11">
									<Accordion.Header>How are the lectures conducted?</Accordion.Header>
									<Accordion.Body>
										Live lectures will be held using google meets / zoom
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="12">
									<Accordion.Header>Are the lectures recorded?</Accordion.Header>
									<Accordion.Body>
										Yes, each lecture recording will be uploaded to youtube and the bootcamp materials. Links will be available on notiob.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="13">
									<Accordion.Header>Will there be support during the course?</Accordion.Header>
									<Accordion.Body>
										Yes, TAs and Instructors will answer questions on discord channels throughout the course.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="14">
									<Accordion.Header>Do I need a GitHub account to participate?</Accordion.Header>
									<Accordion.Body>
										Yes. a Github account is a must have. If you don’t have one we advise you to make one and get used to it before the bootcamp.
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
