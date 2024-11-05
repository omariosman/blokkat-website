/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { useState } from "react";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default function VideoSectionTwo() {
	const [isOpen, setOpen] = useState(false);
	return (
		<div className="section bg-warning-400 fugu-section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 offset-lg-1 order-lg-2">
						<div className="fugu-video-thumb wow fadeInUpX" data-wow-delay=".20s">
							<img src="/images/all-img/video-thumb.png" alt="" />
							<div className="fugu-popup">
								<img src="/images/all-img/video-btn.png" alt="" />
								<div className="fugu-play-btn" onClick={() => setOpen(true)}>
									<img src="/images/all-img/play-btn.png" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5 col-md-10 d-flex align-items-center">
						<div className="fugu-default-content large-content">
							<h2>Safe way to buy and sell crypto</h2>
							<p>
								You can easily buy, sell, store, and transfer cryptocurrency in one place. Get the right
								to buy or sell stocks at a specific date for a specific price. No commissions here
								either.
							</p>
							<div className="fugu-icon-list">
								<ul>
									<li>
										<img src="/images/svg/check1.svg" alt="" />
										Earn a 10-100% bonus on your weekly round-ups.
									</li>
									<li>
										<img src="/images/svg/check1.svg" alt="" />
										Save money when you shop at some of your spots.
									</li>
									<li>
										<img src="/images/svg/check1.svg" alt="" />
										Automatically invest part of every pay of crypto.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ModalVideo
				channel="youtube"
				autoplay
				isOpen={isOpen}
				videoId="E1xkXZs0cAQ"
				onClose={() => setOpen(false)}
			/>
		</div>
	);
}
