import Link from "next/link";
import TextSliderOne from "../common/sliders/text/text-slider-one";

/* eslint-disable @next/next/no-img-element */
export default function HomeTwoHeroSection() {
	return (
		<div className="fugu-hero-section2">
			<div className="container">
				<div className="fugu-hero-content fugu-hero-content2">
					<h1 className="wow fadeInUpX hero-text">Blokkat | بلوكات</h1>
					<h2 className="wow fadeInUpX hero-text" data-wow-delay="0s">
						An Arabic web3 community
					</h2>
					<p className="wow fadeInUpX" data-wow-delay="0.25s">
					</p>
					<div className="fugu-hero-btn-wrap wow fadeInUpX" data-wow-delay="0.40s">
						<Link href="https://t.me/+-ihFLoa1zaZlYzc0" legacyBehavior>
							<a className="fugu-btn fugu-round-btn active" target="_blank">Join Community</a>
						</Link>

						<Link href="https://linktr.ee/blokkat" legacyBehavior>
							<a className="fugu-btn fugu-round-btn" target="_blank">Contact Us</a>
						</Link>
					</div>
				</div>
				
			</div>
			<TextSliderOne />
		</div>
	);
}
