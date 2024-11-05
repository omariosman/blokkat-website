/* eslint-disable @next/next/no-img-element */
import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
export default function FilterGallaryThree() {
	const isotope = useRef();
	const [activeClass, setActiveClass] = useState("*");
	const [filterKey, setFilterKey] = useState("*");
	useEffect(() => {
		setTimeout(() => {
			isotope.current = new Isotope("#fugu-gallery-masonay2", {
				itemSelector: ".fugu-grid-item",
				masonry: {
					columnWidth: ".fugu-grid-item",
					gutterWidth: 0,
				},
				resizable: false,
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
				<div className="fugu-gallery-menu ">
					<ul id="watch-filter-gallery" className="option-set clear-both">
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
				<div className="fugu-gallery-wrap row" id="fugu-gallery-masonay2">
					<div
						className="fugu-grid-item col-lg-6 col-sm-12 branding commercial wow fadeInUpX"
						data-wow-delay="0s"
					>
						<div className="fugu-gallery-item item2">
							<img src="/images/all-img/portfolio/p1.png" alt="" />
							<div className="fugu-gallery-data2">
								<h4>
									<Link href={"/single-portfolio"}> Artwork wall printing </Link>
								</h4>
								<p>Digital Art</p>
								<Link href="single-portfolio" legacyBehavior>
									<a className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="fugu-grid-item col-lg-6 col-sm-12 commercial wow fadeInUpX" data-wow-delay=".10s">
						<div className="fugu-gallery-item item2">
							<img src="/images/all-img/portfolio/p2/p2.png" alt="" />
							<div className="fugu-gallery-data2">
								<h4>
									<Link href={"/single-portfolio"}> Skeleton face </Link>
								</h4>
								<p>Branding</p>
								<Link href="single-portfolio" legacyBehavior>
									<a className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="fugu-grid-item col-lg-6 col-sm-12 design wow fadeInUpX" data-wow-delay=".20s">
						<div className="fugu-gallery-item item2">
							<img src="/images/all-img/portfolio//p2/p3.png" alt="" />
							<div className="fugu-gallery-data2">
								<h4>
									<Link href={"/single-portfolio"}> Chinese ladyface </Link>
								</h4>
								<p>Commercial</p>
								<Link href="single-portfolio" legacyBehavior>
									<a className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div
						className="fugu-grid-item col-lg-6 col-sm-12 digital design wow fadeInUpX"
						data-wow-delay=".30s"
					>
						<div className="fugu-gallery-item item2">
							<img src="/images/all-img/portfolio//p2/p4.png" alt="" />
							<div className="fugu-gallery-data2">
								<h4>
									<Link href={"/single-portfolio"}> Primitive culture </Link>
								</h4>
								<p>Digital Art</p>
								<Link href="single-portfolio" legacyBehavior>
									<a className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div
						className="fugu-grid-item col-lg-6 col-sm-12 branding commercial wow fadeInUpX"
						data-wow-delay=".40s"
					>
						<div className="fugu-gallery-item item2">
							<img src="/images/all-img/portfolio//p2/p5.png" alt="" />
							<div className="fugu-gallery-data2">
								<h4>
									<Link href={"/single-portfolio"}> Strategic planning </Link>
								</h4>
								<p>Branding</p>
								<Link href="single-portfolio" legacyBehavior>
									<a className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="fugu-grid-item col-lg-6 col-sm-12 commercial wow fadeInUpX" data-wow-delay=".50s">
						<div className="fugu-gallery-item item2">
							<img src="/images/all-img/portfolio//p2/p6.png" alt="" />
							<div className="fugu-gallery-data2">
								<h4>
									<Link href={"/single-portfolio"}> Wild animal artwork </Link>
								</h4>
								<p>Digital Art</p>
								<Link href="single-portfolio" legacyBehavior>
									<a className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="fugu-portfolio-btn">
					<Link href={"#"} legacyBehavior>
						<a className="fugu-btn small-btn">View All</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
