/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
export default function ClientSliderTwo() {
	const settting = {
		rows: 2,
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
		<div className="fugu-client-section">
			<div className="container">
				<div className="fugu-client-title">
					<h5>TTrusted by 1600+ of the world's most popular companies</h5>
				</div>
				<div className="fugu-client-slider2">
					<Slider {...settting}>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/about/client1.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/about/client2.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/about/client3.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/about/client4.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/about/client5.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/about/client6.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/about/client7.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/about/client8.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/about/client9.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/about/client10.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/about/client1.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/about/client2.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/about/client3.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/about/client4.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/about/client5.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/about/client6.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/about/client7.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/about/client8.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/about/client9.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/about/client10.png" alt="" />
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
}
