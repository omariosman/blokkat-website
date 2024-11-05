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
				<div className="fugu-gallery-menu">
					<ul id="watch-filter-gallery" className="option-set clear-both" data-option-key="filter">
						<li onClick={handleFilterKeyChange("*")} className={handleActiveClass("*")}>
							All Projects (35)
						</li>
						<li onClick={handleFilterKeyChange("branding")} className={handleActiveClass("branding")}>
							Branding (10)
						</li>
						<li onClick={handleFilterKeyChange("commercial")} className={handleActiveClass("commercial")}>
							Commercial (08)
						</li>
						<li onClick={handleFilterKeyChange("digital")} className={handleActiveClass("digital")}>
							Digital Art (12)
						</li>
						<li onClick={handleFilterKeyChange("design")} className={handleActiveClass("design")}>
							UI/UX Design (05)
						</li>
					</ul>
				</div>
				<div className="fugu-gallery-wrap3" id="fugu-gallery-masonay3">
					<div className="fugu-grid-item branding border_bottom wow fadeInUpX" data-wow-delay="0s">
						<div className="row">
							<div className="col-lg-12">
								<div className="fugu-gallery-thumb">
									<img src="/images/all-img/portfolio/p3/p1.png" alt="" />
								</div>
							</div>
							<div className="col-lg-9">
								<div className="fugu-gallery-data3">
									<h4>Artwork wall printing</h4>
									<p>
										There are many variations of passages of Lorem Ipsum available, but the majority
										have suffered alteration in some form, by injected humour, or randomised words
										which don't look even slightly believable.
									</p>
									<Link href={"single-portfolio"} legacyBehavior>
										<a className="fugu-icon-btn">
											Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="fugu-grid-item commercial border_bottom wow fadeInUpX" data-wow-delay=".10s">
						<div className="row">
							<div className="col-lg-7">
								<div className="fugu-gallery-thumb">
									<img src="/images/all-img/portfolio/p3/p2.png" alt="" />
								</div>
							</div>
							<div className="col-lg-5 d-flex align-items-center">
								<div className="fugu-gallery-data3">
									<h4>Crypto coin</h4>
									<p>
										There are many variations of passages of Lorem Ipsum available, but the majority
										have suffered alteration in some form.
									</p>
									<Link href={"single-portfolio"} legacyBehavior>
										<a className="fugu-icon-btn">
											Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="fugu-grid-item digital border_bottom wow fadeInUpX" data-wow-delay=".20s">
						<div className="row">
							<div className="col-lg-7 order-lg-2">
								<div className="fugu-gallery-thumb">
									<img src="/images/all-img/portfolio/p3/p3.png" alt="" />
								</div>
							</div>
							<div className="col-lg-5 d-flex align-items-center">
								<div className="fugu-gallery-data3">
									<h4>Primitive culture</h4>
									<p>
										There are many variations of passages of Lorem Ipsum available, but the majority
										have suffered alteration in some form.
									</p>
									<Link href={"single-portfolio"} legacyBehavior>
										<a className="fugu-icon-btn">
											Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="fugu-grid-item design border_bottom wow fadeInUpX" data-wow-delay=".30s">
						<div className="row">
							<div className="col-lg-12">
								<div className="fugu-gallery-thumb">
									<img src="/images/all-img/portfolio/p3/p4.png" alt="" />
								</div>
							</div>
							<div className="col-lg-9">
								<div className="fugu-gallery-data3">
									<h4>Wild animal artwork</h4>
									<p>
										There are many variations of passages of Lorem Ipsum available, but the majority
										have suffered alteration in some form, by injected humour, or randomised words
										which don't look even slightly believable.
									</p>
									<Link href={"single-portfolio"} legacyBehavior>
										<a className="fugu-icon-btn">
											Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="fugu-portfolio-btn">
					<Link href="#">
						<a className="fugu-btn small-btn">View All</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
