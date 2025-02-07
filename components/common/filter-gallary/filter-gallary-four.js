/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
export default function FilterGallaryFour() {
	const isotope = useRef();
	const [activeClass, setActiveClass] = useState("*");
	const [filterKey, setFilterKey] = useState("*");
	useEffect(() => {
		setTimeout(() => {
			isotope.current = new Isotope("#fugu-gallery-masonay3", {
				itemSelector: ".fugu-grid-item",

				resizable: false,
				masonry: {
					columnWidth: ".fugu-grid-item",
					gutterWidth: 0,
				},
			});
		}, 1000);
		return () => isotope.current.destroy();
	}, []);

	useEffect(() => {
		if (isotope.current)
			filterKey === "*"
				? isotope.current.arrange({ filter: `*` })
				: isotope.current.arrange({ filter: `.${filterKey}` });
	}, [filterKey]);

	const handleFilterKeyChange = (key) => () => {
		setFilterKey(key);
		setActiveClass(key);
	};

	const handleActiveClass = (key) => {
		if (key === activeClass) return "active";
	};

	return (
		<div className="section fugu-section-padding">
			<div className="container">
				<h2 className="text-center">Explore our Previous Events</h2>
				<div className="fugu-gallery-menu">
					<ul id="watch-filter-gallery" className="option-set clear-both" data-option-key="filter">
						<li onClick={handleFilterKeyChange("*")} className={handleActiveClass("*")}>
							All Events (5)
						</li>
					</ul>
				</div>
				<div className="fugu-gallery-wrap3" id="fugu-gallery-masonay3">
					<div className="fugu-grid-item branding border_bottom wow fadeInUpX" data-wow-delay="0s">
						<div className="row">
							<div className="col-lg-12">
								<div className="fugu-gallery-thumb">
									<img src="/images/events/1.png" alt="" />
								</div>
							</div>
							<div className="col-lg-9">
								<div className="fugu-gallery-data3">
									<h4>0xCairo Tech Day II (2nd Edition)</h4>
									<p>
										0xCairo Tech Day 2nd Edition brought together students, developers, and enthusiasts for a transformative journey from Web2 to Web3.  Attendees explored topics like smart contracts, Web3 integration, testing, and blockchain security while connecting with professionals. The event featured two introductory, expert-led talks, followed by a full day of hands-on skill-building workshops. With a lunch break to recharge and invaluable networking opportunities to connect with peers and industry professionals, the day offered a perfect blend of learning and community building.
									</p>
									<Link 
										href={{
											pathname: `/events-gallery/1`,
										}}
										legacyBehavior>
										<a>Discover More</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="fugu-grid-item commercial border_bottom wow fadeInUpX" data-wow-delay=".10s">
						<div className="row">
							<div className="col-lg-7">
								<div className="fugu-gallery-thumb">
									<img src="/images/events/2.png" alt="" />
								</div>
							</div>
							<div className="col-lg-5 d-flex align-items-center">
								<div className="fugu-gallery-data3">
									<h4>Global Pizza Party 2024 - Cairo</h4>
									<p>
										Global Pizza Party 2024 in Cairo was a slice of pure fun! 🍕 On May 22, blockchain enthusiasts celebrated Bitcoin Pizza Day over the best pizza in Cairo! . With free pizza, backed by Pizza DAO, and lots of Web3 chatter, the event was all about connecting, sharing insights and laughs, and enjoying the community spirit. Great food, great vibes, and plenty of exciting web3 conversation made it an unforgettable night! 🎉
									</p>
									<Link 
										href={{
											pathname: `/events-gallery/2`,
										}}
										legacyBehavior>
										<a>Discover More</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="fugu-grid-item digital border_bottom wow fadeInUpX" data-wow-delay=".20s">
						<div className="row">
							<div className="col-lg-7 order-lg-2">
								<div className="fugu-gallery-thumb">
									<img src="/images/events/3.png" alt="" />
								</div>
							</div>
							<div className="col-lg-5 d-flex align-items-center">
								<div className="fugu-gallery-data3">
									<h4>AI & Blockchain Community Brunch.</h4>
									<p>
										The <b>AI & Blockchain Community Brunch</b> at The <b>GrEEK Campus</b> in downtown Cairo was a side event during RiseUp Summit 2024, Egypt&apos;s Largest startups & Entrepreneurship summit. Hosted by <b>Arabs in Blockchain</b>, <b>Chainlink</b>, <b>People of Data</b>, and <b>Blokkat</b>, with support from Cartesi, Pravica, and 1inch, it brought together blockchain & entrepreneurship experts and enthusiasts to explore the intersection of AI and blockchain technologies.

										Key talks covered exciting developments in blockchain applications and real-world asset tokenization. The panel discussion, featuring <b>Tarry Singh</b> from DK AI, a very special guest, delved into how these technologies are reshaping startups. The event wrapped up with brunch and networking, fostering collaboration and community growth in Cairo's vibrant entrepreneurship community and its growing web3 community.</p>
									<Link 
										href={{
											pathname: `/events-gallery/3`,
										}}
										legacyBehavior>
										<a>Discover More</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="fugu-grid-item design border_bottom wow fadeInUpX" data-wow-delay=".30s">
					<div className="row">
						<div className="col-lg-12">
						<div className="fugu-gallery-thumb">
							<img src="/images/events/4.png" alt="" />
						</div>
						</div>
						<div className="col-lg-9">
						<div className="fugu-gallery-data3">
							<h4>0xCairo</h4>
							<p>
							0xCairo Tech Day First Edition, organized in collaboration with Arabs in Blockchain, marked one of the earliest Web3 events in Egypt. It was also the first-ever Chainlink event in the country and the beginning of a series of meetups aimed at growing the community. Hosted at the Egyptian Chinese University (ECU), the day was filled with foundational talks, hands-on workshops, and vibrant panel discussions. Attendees explored blockchain fundamentals, cross-chain development (featuring the first CCIP Workshop in Arabic!), and real-world applications, while connecting with peers and industry professionals. The event laid the groundwork for future community-driven initiatives and sparked excitement for Web3’s potential in the region. 🌍✨
							</p>
							<Link 
								href={{
									pathname: `/events-gallery/4`,
								}}
								legacyBehavior>
								<a>Discover More</a>
							</Link>
						</div>
						</div>
					</div>
					</div>
				</div>
				<div className="fugu-grid-item commercial border_bottom wow fadeInUpX" data-wow-delay=".10s">
				<div className="row">
					<div className="col-lg-7">
					<div className="fugu-gallery-thumb">
						<img src="/images/events/5.png" alt="" />
					</div>
					</div>
					<div className="col-lg-5 d-flex align-items-center">
					<div className="fugu-gallery-data3">
						<h4>Web3 Wellness Day</h4>
						<p>
						<b>Web3 Wellness Day</b> marked a major milestone as Blokkat's first-ever event, co-organized with <b>Arabs in Blockchain</b> and <b>Yoga DAO</b>. Held at The American University in Cairo, this was one of the earliest on-ground Web3 gatherings in Egypt, designed to introduce university students to the world of blockchain and decentralized technologies. The day kicked off with opening remarks from AUC and featured a series of insightful talks covering introductions to blockchain fundamentals, NFTs, DAOs, the Metaverse, and DeFi. Attendees also enjoyed a yoga session, networking breaks, and lunch, blending wellness with education. This special day set the foundation for community growth and inspired many students to explore Web3's potential.
						</p>
						<Link 
								href={{
									pathname: `/events-gallery/5`,
								}}
								legacyBehavior>
								<a>Discover More</a>
							</Link>
					</div>
					</div>
				</div>
				</div>

				<div className="fugu-portfolio-btn">
					<Link href="#" className="fugu-btn small-btn"> View All
					</Link>
				</div>
			</div>
		</div>
	);
}
