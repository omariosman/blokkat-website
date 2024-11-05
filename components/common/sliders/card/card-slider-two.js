/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Slider from "react-slick";
import SingleCardSliderTwo from "./single-card-slider-two";

import { v4 as uuid4 } from "uuid";

const nftCollections = [
	{
		img: "card1",
		title: "Monkey Cowboy",
		rth: "0.438",
		name: "By Cooper",
		hart: "10K",
	},
	{
		img: "card2",
		title: "Monkey Cowboy",
		rth: "0.538",
		name: "By Cooper",
		hart: "8K",
	},
	{
		img: "card3",
		title: "ApeSmilling",
		rth: "0.538",
		name: "By Jenny",
		hart: "8K",
	},
	{
		img: "card4",
		title: "Attitude Ape",
		rth: "0.438",
		name: "By Howard",
		hart: "10K",
	},
	{
		img: "card1",
		title: "Ape Mutant",
		rth: "0.018",
		name: "Monkey Cowboy",
		hart: "2K",
	},
	{
		img: "card2",
		title: "ApeSmilling",
		rth: "0.438",
		name: "By Jenny",
		hart: "18K",
	},
];

export default function CardSliderTwo() {
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
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
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
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
		],
	};

	return (
		<div className="fugu--collection-section fugu--section-padding">
			<div className="container">
				<div className="fugu--section-title">
					<div className="fugu--default-content content-black">
						<h2>Start your NFTs collection</h2>
						<p>
							Start your NFT collection quickly & easily by grabbing a free NFT every week! Get in early
							and grab NFTs before most of the world.
						</p>
					</div>
				</div>
			</div>
			<div className="fugu--slider-two">
				<Slider {...settings}>
					{nftCollections.map((card) => (
						<SingleCardSliderTwo key={uuid4()} card={card} />
					))}
				</Slider>
			</div>
		</div>
	);
}
