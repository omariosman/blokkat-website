/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { useState } from "react";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default function VideoSectionThree() {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className="section bg-warning-200 fugu-section-padding2">
			<div className="container">
				<div className="fugu-section-title2">
					<div className="row">
						<div className="col-lg-6">
							<h2>Buy your favorite crypto at the price you want</h2>
						</div>
						<div className="col-lg-5 offset-lg-1 d-flex align-items-center">
							<p>
								This is a platform where you can buy & sell all your chosen-cryptocurrencies and digital
								assets at affordable prices. It is a plans to leverage blockchain technology.
							</p>
						</div>
					</div>
				</div>
				<div className="fugu-video-thumb fugu-video-thumb2 wow fadeInUpX" data-wow-delay="0.10s">
					<img src="/images/all-img/v2/video-thumb.png" alt="" />
					<div className="fugu-popup">
						<img src="/images/all-img/v2/video-btn.png" alt="" />
						<div className="fugu-play-btn" onClick={() => setOpen(true)}>
							<img src="/images/all-img/play-btn.png" alt="" />
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
