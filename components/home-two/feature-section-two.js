/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

export default function FeatureSectionTwo({ title }) {
	return (
		<div className="section bg-gray-800 fugu-section-padding3">
			<div className="container">
				<div className="fugu-section-title title-white">
					<h2>{title}</h2>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="fugu-iconbox-wrap3 wow fadeInUpX" data-wow-delay="0s">
							<div className="fugu-iconbox-icon3">
								<img src="/images/all-img/cats-icons/10.svg" alt="" />
							</div>
							<div className="fugu-iconbox-data3">
								<h4>Educational content</h4>
								<p>
								We simplify complex blockchain concepts in a fun and practical way. Our goal is to make learning accessible to everyone, whether you’re a student or a seasoned builder, through our bootcamps, articles, videos, and more.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="fugu-iconbox-wrap3 wow fadeInUpX" data-wow-delay="0.10s">
							<div className="fugu-iconbox-icon3">
								<img src="/images/all-img/cats-icons/14.svg" alt="" />
							</div>
							<div className="fugu-iconbox-data3">
								<h4>Technical workshops</h4>
								<p>We organize technical workshops and online labs, and hands-on coding sessions designed to equip you with the skills to build and experiment with blockchain projects.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="fugu-iconbox-wrap3 wow fadeInUpX" data-wow-delay="0.20s">
							<div className="fugu-iconbox-icon3">
								<img src="/images/all-img/cats-icons/8.svg" alt="" />
							</div>
							<div className="fugu-iconbox-data3">
								<h4>Use-case & trends discussions </h4>
								<p>
								We explore blockchain use cases and exciting rising projects. Whether what’s great about it is the business model, how it utilized the technology, or a great UX. It’s a great way to discover the latest trends and get inspired.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<div className="fugu-iconbox-wrap3 wow fadeInUpX" data-wow-delay="0.30s">
							<div className="fugu-iconbox-icon3">
								<img src="/images/all-img/cats-icons/1.svg" alt="" />
							</div>
							<div className="fugu-iconbox-data3">
								<h4>Career Guidance & Opportunities</h4>
								<p>
								We help you navigate the web3 job market with resources, tips, and support. From exploring different roles to preparing for interviews, we connect you with opportunities and guide you on your career journey.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<div className="fugu-iconbox-wrap3 wow fadeInUpX" data-wow-delay="0.40s">
							<div className="fugu-iconbox-icon3">
								<img src="/images/all-img/cats-icons/4.svg" alt="" />
							</div>
							<div className="fugu-iconbox-data3">
								<h4>Event Organization </h4>
								<p>
								We organize events and meetups where we bring together students, builders, and experts to learn, network, and share ideas. Whether online or in-person, our events are all about community, collaboration, and having fun while learning.
								</p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
}
