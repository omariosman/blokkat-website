/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Slider from "react-slick";
function NextArrow({ onClick }) {
	return <button className="slide-arrow fugu--arrow" onClick={onClick}></button>;
}

function PrevArrow({ onClick }) {
	return <button className="slide-arrow prev-arrow" onClick={onClick}></button>;
}

export default function CardSliderOne() {
	const settings = {
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		autoplay: false,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
		],
	};
	return (
		<div className="fugu--slider-section">
			<div className="container">
				<div className="fugu--section-title">
					<div className="fugu--default-content content-sm">
						<h2>This weeks trending collections</h2>
						<p>
							Some of these upcoming trends could change the way we experience the web, brand products,
							buy and sell art, even create & experience music.
						</p>
					</div>
				</div>
				<div className="fugu--slider-one">
					<Slider {...settings}>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/v3/card1.jpg" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Meta Frog Club: VIP Sale</h3>
								<p>Pre-sale : 18 May 2023</p>
								<div className="fugu--card-footer">
									<div className="fugu--card-footer-data">
										<span>Mint Price:</span>
										<h4>0.194 ETH</h4>
									</div>
									<Link href={"/"} legacyBehavior>
										<a className="fugu--btn btn-sm bg-white">Place a Bid</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/v3/card2.jpg" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>The Exorians Universe</h3>
								<p>Pre-sale : 18 May 2023</p>
								<div className="fugu--card-footer">
									<div className="fugu--card-footer-data">
										<span>Mint Price:</span>
										<h4>0.194 ETH</h4>
									</div>
									<Link href={"/"} legacyBehavior>
										<a className="fugu--btn btn-sm bg-white">Place a Bid</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/v3/card3.jpg" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>CryptoPunks 4D Official</h3>
								<p>Pre-sale : 18 May 2023</p>
								<div className="fugu--card-footer">
									<div className="fugu--card-footer-data">
										<span>Mint Price:</span>
										<h4>0.194 ETH</h4>
									</div>
									<Link href={"/"} legacyBehavior>
										<a className="fugu--btn btn-sm bg-white">Place a Bid</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/v3/card4.jpg" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>The Bees Kingdom</h3>
								<p>Pre-sale : 18 May 2023</p>
								<div className="fugu--card-footer">
									<div className="fugu--card-footer-data">
										<span>Mint Price:</span>
										<h4>0.194 ETH</h4>
									</div>
									<Link href={"/"} legacyBehavior>
										<a className="fugu--btn btn-sm bg-white">Place a Bid</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/v3/card5.jpg" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>CryptoPunks 4D Official</h3>
								<p>Pre-sale : 18 May 2023</p>
								<div className="fugu--card-footer">
									<div className="fugu--card-footer-data">
										<span>Mint Price:</span>
										<h4>0.194 ETH</h4>
									</div>
									<Link href={"/"} legacyBehavior>
										<a className="fugu--btn btn-sm bg-white">Place a Bid</a>
									</Link>
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</div>
			<div className="fugu--shape1">
				<img src="/images/shape2/shape1.png" alt="" />
			</div>
		</div>
	);
}
