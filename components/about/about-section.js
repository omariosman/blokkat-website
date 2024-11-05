/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
export default function AboutSection() {
	return (
		<div className="fugu-about-section">
			<div className="container">
				<div className="row">
					<div className="col-xl-7 col-lg-6">
						<div className="fugu-about-thumb">
							<img
								className="wow fadeInLeft"
								data-wow-delay=".10s"
								src="/images/all-img/about/about-thumb1.png"
								alt=""
							/>
							<div className="fugu-about-thumb2">
								<img
									className="wow fadeInUpX"
									data-wow-delay=".30s"
									src="/images/all-img/about/about-thumb2.png"
									alt=""
								/>
							</div>
						</div>
					</div>
					<div className="col-xl-5 col-lg-6 col-md-11 d-flex align-items-center">
						<div className="fugu-default-content">
							<h2>The story behind our companys beginnings and our mission</h2>
							<p>
								Mthemeus was founded in 2016, and we have accomplished so much over the years. To create
								the solution your business. In the digital world, an impactful first impression for you
								stand
							</p>
							<p>
								Being memorable is hard, but worth it if you want a brand for that will resonate with
								customers, colleagues, and investors.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
