import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function HomeTwoHeroSection() {
	return (
		<div className="fugu-hero-section2">
			<div className="container">
				<div className="fugu-hero-content fugu-hero-content2">
					<h1 className="wow fadeInUpX text-white">Blokkat | بلوكات</h1>
					<h2 className="wow fadeInUpX text-white" data-wow-delay="0s">
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
			<div className="fugu-shape4">
				<img src="/images/shape/shape3.png" alt="" />
			</div>
			<div className="fugu-shape5">
				<img src="/images/shape/shape4.png" alt="" />
			</div>
		</div>
	);
}
