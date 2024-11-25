/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
export default function AboutSection({ title }) {
	return (
		<div className="fugu-about-section">
			<div className="container">
				<div className="row">
					<div className="col-xl-7 col-lg-6 images-holder">
						<div className="fugu-about-thumb">
							<img
								className="wow fadeInLeft"
								data-wow-delay=".10s"
								src="/images/about-us/2.jpeg"
								alt=""
							/>
							<div className="fugu-about-thumb2">
								<img
									className="wow fadeInUpX"
									data-wow-delay=".30s"
									src="/images/about-us/1.jpg"
									alt=""
								/>
							</div>
						</div>
					</div>
					<div className="col-xl-5 col-lg-6 col-md-11 d-flex align-items-center">
						<div className="fugu-default-content">
							<h2>{title}</h2>
							<p>
							Salam Alaykum! I’m Kareem Kassab, Blokkat’s Founder
							I started blokkat as the AUC blockchain community. I used to share blockchain knowledge with a few colleagues, only 2 were interested :D, and I used to teach only 4 students what I self studied during the assembly hour in my university in a random empty class every time! After Devcon 6, I came back with a vision to build builders and grow the community in Egypt and MENA and… Here we are ! 
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
