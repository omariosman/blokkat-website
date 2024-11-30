/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
export default function VisionSection({ title }) {
	return (
		<div className="fugu-about-section">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-lg-6 images-holder">
						<div className="fugu-about-thumb">
							<img
								className="wow fadeInLeft vision-img"
								data-wow-delay=".10s"
								src="/images/logo/logo-black.svg"
								alt=""
							/>
						</div>
					</div>
					<div className="col-xl-5 col-lg-6 col-md-11 d-flex align-items-center">
						<div className="fugu-default-content">
							<h2>{title}</h2>
							<p>
								We envision a world where Blokkat community members—students, developers, entrepreneurs, artists, designers, community managers, educators, content creators, legal professionals, and other enthusiasts—solve real-world problems around them with Web3 solutions. 

								A world where, through Blokkat, they not only gain valuable knowledge and education in Arabic but also forge meaningful connections, find inspiring energy, and access unique opportunities, enabling them and fuelling their contribution toward the global ecosystem.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
