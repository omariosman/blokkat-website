import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Team() {
	return (
		<div className="fugu--team-section fugu--section-padding2">
			<div className="container">
				<div className="fugu--section-title-wrap">
					<div className="fugu--section-title">
						<div className="fugu--default-content content-sm">
							<h2>Meet our dynamic team</h2>
							<p>
								Collectors who value these relationships will look for NFTs with unique narratives and
								creation processes.
							</p>
						</div>
					</div>
					<div className="fugu--section-button">
						<div className="fugu--portfolio-btn">
							<Link href={"#"} legacyBehavior>
								<a className="fugu--outline-btn">
									<span>View All Members</span>
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="fugu--team-wrap wow fadeInUpX" data-wow-delay="0s">
							<div className="fugu--team-left">
								<div className="fugu--team-thumb">
									<img src="/images/all-img/v3/team1.jpg" alt="" />
								</div>
								<div className="fugu--team-data">
									<h4>Jane Cooper</h4>
									<p>CEO & Founder</p>
								</div>
							</div>
							<button type="button" className="fugu--dot-btn">
								<img src="/images/svg2/dots.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="fugu--team-wrap wow fadeInUpX" data-wow-delay="0.10s">
							<div className="fugu--team-left">
								<div className="fugu--team-thumb">
									<img src="/images/all-img/v3/team2.jpg" alt="" />
								</div>
								<div className="fugu--team-data">
									<h4>Esther Howard</h4>
									<p>Art Director</p>
								</div>
							</div>
							<button type="button" className="fugu--dot-btn">
								<img src="/images/svg2/dots.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="fugu--team-wrap wow fadeInUpX" data-wow-delay="0.20s">
							<div className="fugu--team-left">
								<div className="fugu--team-thumb">
									<img src="/images/all-img/v3/team3.jpg" alt="" />
								</div>
								<div className="fugu--team-data">
									<h4>Cameron Williamson</h4>
									<p>Marketing Officer</p>
								</div>
							</div>
							<button type="button" className="fugu--dot-btn">
								<img src="/images/svg2/dots.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="fugu--team-wrap wow fadeInUpX" data-wow-delay="0.30s">
							<div className="fugu--team-left">
								<div className="fugu--team-thumb">
									<img src="/images/all-img/v3/team4.jpg" alt="" />
								</div>
								<div className="fugu--team-data">
									<h4>Brooklyn Simmons</h4>
									<p>Operating Officer</p>
								</div>
							</div>
							<button type="button" className="fugu--dot-btn">
								<img src="/images/svg2/dots.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="fugu--team-wrap wow fadeInUpX" data-wow-delay="0.40s">
							<div className="fugu--team-left">
								<div className="fugu--team-thumb">
									<img src="/images/all-img/v3/team5.jpg" alt="" />
								</div>
								<div className="fugu--team-data">
									<h4>Leslie Alexander</h4>
									<p>Graphic Designer</p>
								</div>
							</div>
							<button type="button" className="fugu--dot-btn">
								<img src="/images/svg2/dots.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="fugu--team-wrap wow fadeInUpX" data-wow-delay="0.50s">
							<div className="fugu--team-left">
								<div className="fugu--team-thumb">
									<img src="/images/all-img/v3/team6.jpg" alt="" />
								</div>
								<div className="fugu--team-data">
									<h4>Guy Hawkins</h4>
									<p>UI/UX Designer</p>
								</div>
							</div>
							<button type="button" className="fugu--dot-btn">
								<img src="/images/svg2/dots.svg" alt="" />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="fugu--shape3">
				<img src="/images/shape2/shape3.png" alt="" />
			</div>
		</div>
	);
}
