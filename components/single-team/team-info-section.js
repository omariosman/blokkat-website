import Link from "next/link";

export default function TeamInfoSection() {
	return (
		<div className="section">
			<div className="container">
				<div className="fugu-team-information-wrap">
					<div className="row">
						<div className="col-lg-4">
							<div className="fugu-team-information">
								<h5>Graphic design</h5>
								<p>
									I studied professional graphic design, at design school at Duoc UC. I understand the
									design as great communication tool that generates great value direct communication
									with the audience.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fugu-team-information">
								<h5>UI design</h5>
								<p>
									In my first UI designer job, I had the opportunity to hone my digital product
									creation skills & the learn from working under agile methodologies. My favorite tool
									is Figma and XD.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fugu-team-information">
								<h5>UX design</h5>
								<p>
									In 2018, I took the Information Architecture and UX Diploma from Central University,
									to improve my UX design skills. Since then I have also been involved in UX and in
									product designer positions.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="fugu-team-information-wrap">
					<div className="row">
						<div className="col-lg-4">
							<div className="fugu-team-information">
								<h5>Graphic design</h5>
								<ul>
									<li>
										<Link href={"#"}> Information architecture. </Link>
									</li>
									<li>
										<Link href={"#"}> Usability test (face-to-face and remote) </Link>
									</li>
									<li>
										<Link href={"#"}> Knowledge of agile frameworks </Link>
									</li>
									<li>
										<Link href={"#"}> Product Discovery </Link>
									</li>
									<li>
										<Link href={"#"}> Understanding & operation with Design Systems </Link>
									</li>
									<li>
										<Link href={"#"}> Graphic design and branding </Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fugu-team-information">
								<h5>UI design</h5>
								<ul>
									<li>
										<Link href={"#"}> Adobe xd </Link>
									</li>
									<li>
										<Link href={"#"}> Photoshop </Link>
									</li>
									<li>
										<Link href={"#"}> Adobe illustrator </Link>
									</li>
									<li>
										<Link href={"#"}> Sketch </Link>
									</li>
									<li>
										<Link href={"#"}> Figma </Link>
									</li>
									<li>
										<Link href={"#"}> Invision </Link>
									</li>
									<li>
										<Link href={"#"}> Mural </Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fugu-team-information">
								<h5>UX design</h5>
								<ul>
									<li>
										<Link href={"#"}> Empathy Mapping </Link>
									</li>
									<li>
										<Link href={"#"}> Focus on project objectives </Link>
									</li>
									<li>
										<Link href={"#"}> Good communication skills </Link>
									</li>
									<li>
										<Link href={"#"}> Collaboration and teamwork </Link>
									</li>
									<li>
										<Link href={"#"}> Autonomy </Link>
									</li>
									<li>
										<Link href={"#"}> Research Skills </Link>
									</li>
									<li>
										<Link href={"#"}> Usability and testing experience </Link>
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
