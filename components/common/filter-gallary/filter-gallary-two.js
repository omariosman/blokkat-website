/* eslint-disable @next/next/no-img-element */

import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
export default function FilterGallaryTwo() {
	const isotope = useRef();
	const [activeClass, setActiveClass] = useState("*");
	const [filterKey, setFilterKey] = useState("*");

	useEffect(() => {
		setTimeout(() => {
			isotope.current = new Isotope("#fugu-gallery-masonay1", {
				itemSelector: ".fugu-grid-item",
				layoutMode: "fitRows",
			});
		}, 1000);

		// return () => isotope.current.destroy();
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
				<div className="fugu-gallery-wrap" id="fugu-gallery-masonay1">
					<div className="fugu-grid-item branding commercial fugu-grid-item-w2 wow fadeInUpX">
						<div className="fugu-gallery-item">
							<img src="/images/all-img/portfolio/p1.png" alt="" />
							<div className="fugu-gallery-data">
								<h4>
									<Link href={"/single-portfolio"}>Artwork wall printing</Link>
								</h4>
								<p>Digital Art</p>
							</div>
						</div>
					</div>
					<div className="fugu-grid-item commercial fugu-grid-item-w2 wow fadeInUpX" data-wow-delay=".10s">
						<div className="fugu-gallery-item">
							<img src="/images/all-img/portfolio/p2.png" alt="" />
							<div className="fugu-gallery-data">
								<h4>
									<Link href={"/single-portfolio"}>Skeleton face</Link>
								</h4>
								<p>Branding</p>
							</div>
						</div>
					</div>
					<div className="fugu-grid-item design wow fadeInUpX" data-wow-delay=".20s">
						<div className="fugu-gallery-item">
							<img src="/images/all-img/portfolio/p3.png" alt="" />
							<div className="fugu-gallery-data">
								<h4>
									<Link href={"/single-portfolio"}>Chinese ladyface</Link>
								</h4>
								<p>Commercial</p>
							</div>
						</div>
					</div>
					<div className="fugu-grid-item digital design wow fadeInUpX" data-wow-delay=".30s">
						<div className="fugu-gallery-item">
							<img src="/images/all-img/portfolio/p4.png" alt="" />
							<div className="fugu-gallery-data">
								<h4>
									<Link href={"/single-portfolio"}>Primitive culture</Link>
								</h4>
								<p>Digital Art</p>
							</div>
						</div>
					</div>
					<div className="fugu-grid-item digital design wow fadeInUpX" data-wow-delay=".40s">
						<div className="fugu-gallery-item">
							<img src="/images/all-img/portfolio/p5.png" alt="" />
							<div className="fugu-gallery-data">
								<h4>
									<Link href={"/single-portfolio"}>Crypto coin</Link>
								</h4>
								<p>UI/UX Design</p>
							</div>
						</div>
					</div>
					<div className="fugu-grid-item design wow fadeInUpX" data-wow-delay=".50s">
						<div className="fugu-gallery-item">
							<img src="/images/all-img/portfolio/p3.png" alt="" />
							<div className="fugu-gallery-data">
								<h4>
									<Link href={"/single-portfolio"}>Chinese ladyface</Link>
								</h4>
								<p>Commercial</p>
							</div>
						</div>
					</div>
					<div
						className="fugu-grid-item branding commercial fugu-grid-item-w2 wow fadeInUpX"
						data-wow-delay=".60s"
					>
						<div className="fugu-gallery-item">
							<img src="/images/all-img/portfolio/p6.png" alt="" />
							<div className="fugu-gallery-data">
								<h4>
									<Link href={"/single-portfolio"}>Strategic planning</Link>
								</h4>
								<p>Branding</p>
							</div>
						</div>
					</div>
					<div className="fugu-grid-item commercial fugu-grid-item-w2 wow fadeInUpX" data-wow-delay=".70s">
						<div className="fugu-gallery-item">
							<img src="/images/all-img/portfolio/p7.png" alt="" />
							<div className="fugu-gallery-data">
								<h4>
									<Link href={"/single-portfolio"}>Wild animal artwork</Link>
								</h4>
								<p>Digital Art</p>
							</div>
						</div>
					</div>
				</div>
				<div className="fugu-portfolio-btn">
					<a className="fugu-btn small-btn" href="">
						View All
					</a>
				</div>
			</div>
		</div>
	);
}
