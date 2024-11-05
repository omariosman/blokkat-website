/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
export default function TestimonialSliderOne() {
	const settings = {
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: false,
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
		<div className="fugu-testimonial-section fugu-section-padding2">
			<div className="container">
				<div className="fugu-section-title title-large">
					<h2>User gives feedback using our crypto app</h2>
				</div>
				<div className="fugu-testimonial-slider">
					<Slider {...settings}>
						<div className="fugu-testimonial-card">
							<div className="fugu-testimonial-author-wrap">
								<div className="fugu-testimonial-author-thumb">
									<img src="/images/all-img/testimonial1.png" alt="" />
								</div>
								<div className="fugu-testimonial-author-data">
									<h5>Marcel Gafam</h5>
									<span>@margafam</span>
								</div>
							</div>
							<h4>Very satisfied 😊</h4>
							<p>
								I started with the Fugu app and now I am planning on upgrading to higher value & $25
								welcome bonus. when you very first register for the app or the exchange with a referral
								code.
							</p>
						</div>
						<div className="fugu-testimonial-card">
							<div className="fugu-testimonial-author-wrap">
								<div className="fugu-testimonial-author-thumb">
									<img src="/images/all-img/testimonial2.png" alt="" />
								</div>
								<div className="fugu-testimonial-author-data">
									<h5>Patrick Perfetto</h5>
									<span>@patrickfetto</span>
								</div>
							</div>
							<h4>Really happy with the app 💰</h4>
							<p>
								Here, Im rating the Fugu crypto app and the debit card. My experience is great! & the
								app is very well designed. Crypto is a marketing is very good and I think it ll to win
								long term with fugu app.
							</p>
						</div>
						<div className="fugu-testimonial-card">
							<div className="fugu-testimonial-author-wrap">
								<div className="fugu-testimonial-author-thumb">
									<img src="/images/all-img/testimonial3.png" alt="" />
								</div>
								<div className="fugu-testimonial-author-data">
									<h5>Alex Zansir</h5>
									<span>@alexzan</span>
								</div>
							</div>
							<h4>I love it! ❤️</h4>
							<p>
								I have been using Fugu crypto app since December 2021 and so far things have a been
								alright where purchasing BTCs and to my external wallets. Thanks fugu for a good
								experience at my first Wallet
							</p>
						</div>
						<div className="fugu-testimonial-card">
							<div className="fugu-testimonial-author-wrap">
								<div className="fugu-testimonial-author-thumb">
									<img src="/images/all-img/testimonial1.png" alt="" />
								</div>
								<div className="fugu-testimonial-author-data">
									<h5>Marcel Gafam</h5>
									<span>@margafam</span>
								</div>
							</div>
							<h4>Very satisfied 😊</h4>
							<p>
								I started with the Fugu app and now I am planning on upgrading to higher value & $25
								welcome bonus. when you very first register for the app or the exchange with a referral
								code.
							</p>
						</div>
						<div className="fugu-testimonial-card">
							<div className="fugu-testimonial-author-wrap">
								<div className="fugu-testimonial-author-thumb">
									<img src="/images/all-img/testimonial2.png" alt="" />
								</div>
								<div className="fugu-testimonial-author-data">
									<h5>Patrick Perfetto</h5>
									<span>@patrickfetto</span>
								</div>
							</div>
							<h4>Really happy with the app 💰</h4>
							<p>
								Here, I'm rating the Fugu crypto app and the debit card. My experience is great! & the
								app is very well designed. Crypto is a marketing is very good and I think it'll to win
								long term with fugu app.
							</p>
						</div>
						<div className="fugu-testimonial-card">
							<div className="fugu-testimonial-author-wrap">
								<div className="fugu-testimonial-author-thumb">
									<img src="/images/all-img/testimonial3.png" alt="" />
								</div>
								<div className="fugu-testimonial-author-data">
									<h5>Alex Zansir</h5>
									<span>@alexzan</span>
								</div>
							</div>
							<h4>I love it! ❤️</h4>
							<p>
								I have been using Fugu crypto app since December 2021 and so far things have a been
								alright where purchasing BTCs and to my external wallets. Thanks fugu for a good
								experience at my first Wallet
							</p>
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
}
