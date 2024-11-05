/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";

export default function ClientSliderOne() {
	const settings = {
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 10000,
		cssEase: "linear",
		pauseOnHover: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	};
	return (
		<div className="fugu-client-section bg-gray-800">
			<div className="container">
				<div className="fugu-client-title text-white">
					<h5>Trusted by 1600+ of the world most popular companies</h5>
				</div>
				<div className="fugu-client-slider">
					<Slider {...settings}>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/client1.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/client2.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/client3.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/client4.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/client5.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/client1.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/client2.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/client3.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/client4.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/client5.png" alt="" />
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
}
