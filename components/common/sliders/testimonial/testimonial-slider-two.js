/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Slider from "react-slick";
export default function TestimonialSliderTwo() {
	const settings = {
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};
	return (
		<div className="section bg-warning-200 fugu-section-padding2">
			<div className="container">
				<div className="fugu-section-title">
					<h2>1600+ traders admit that fugu is the best crypto</h2>
				</div>
				<div className="fugu-testimonial-slider2">
					<Slider {...settings}>
						<div className="fugu-testimonial-card2">
							<ul>
								<li>
									<img src="/images/svg/star3.svg" alt="" />
								</li>
								<li>
									<img src="/images/svg/star3.svg" alt="" />
								</li>
								<li>
									<img src="/images/svg/star3.svg" alt="" />
								</li>
								<li>
									<img src="/images/svg/star3.svg" alt="" />
								</li>
								<li>
									<img src="/images/svg/star3.svg" alt="" />
								</li>
							</ul>
							<p>
								“I found Nexto very professional and trustworthy during my crypto trading duration of
								147 days. They are very honest and trusted. It is trustable to earn passive income.”
							</p>
							<div className="fugu-testimonial-author-data">
								<h5>Karen Lynn</h5>
								<span>Founder @ Company</span>
							</div>
						</div>
						<div className="fugu-testimonial-card2">
							<ul>
								<li>
									<img src="/images/svg/star3.svg" alt="" />
								</li>
								<li>
									<img src="/images/svg/star3.svg" alt="" />
								</li>
								<li>
									<img src="/images/svg/star3.svg" alt="" />
								</li>
								<li>
									<img src="/images/svg/star3.svg" alt="" />
								</li>
								<li>
									<img src="/images/svg/star3.svg" alt="" />
								</li>
							</ul>
							<p>
								“100% Trusted. Very legit in crypto world. So far I'm satisfied with Nexto. I just wish
								this will best continue this way and there will be no sudden changes and also more than
								just satisfied.”
							</p>
							<div className="fugu-testimonial-author-data">
								<h5>Subash Rajendran</h5>
								<span>Software engineer</span>
							</div>
						</div>
						<div className="fugu-testimonial-card2">
							<ul>
								<li>
									<img src="/images/svg/star3.svg" alt="" />
								</li>
								<li>
									<img src="/images/svg/star3.svg" alt="" />
								</li>
								<li>
									<img src="/images/svg/star3.svg" alt="" />
								</li>
								<li>
									<img src="/images/svg/star3.svg" alt="" />
								</li>
								<li>
									<img src="/images/svg/star3.svg" alt="" />
								</li>
							</ul>
							<p>
								“I found Nexto very professional and trustworthy during my crypto trading duration of
								147 days. They are very honest and trusted. It is trustable to earn passive income.”
							</p>
							<div className="fugu-testimonial-author-data">
								<h5>Karen Lynn</h5>
								<span>Founder @ Company</span>
							</div>
						</div>
						<div className="fugu-testimonial-card2">
							<ul>
								<li>
									<img src="/images/svg/star3.svg" alt="" />
								</li>
								<li>
									<img src="/images/svg/star3.svg" alt="" />
								</li>
								<li>
									<img src="/images/svg/star3.svg" alt="" />
								</li>
								<li>
									<img src="/images/svg/star3.svg" alt="" />
								</li>
								<li>
									<img src="/images/svg/star3.svg" alt="" />
								</li>
							</ul>
							<p>
								“100% Trusted. Very legit in crypto world. So far I'm satisfied with Nexto. I just wish
								this will best continue this way and there will be no sudden changes and also more than
								just satisfied.”
							</p>
							<div className="fugu-testimonial-author-data">
								<h5>Subash Rajendran</h5>
								<span>Software engineer</span>
							</div>
						</div>
					</Slider>
				</div>
				<div className="fugu-testimonial-btn">
					<Link href={"contact"} legacyBehavior>
						<a className="fugu-btn fugu-header-btn fugu-header-btn2">Read 18k other reviews</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
