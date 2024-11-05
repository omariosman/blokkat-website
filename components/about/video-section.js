/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { useState } from "react";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default function VideoSection() {
	const [isOpen, setOpen] = useState(false);
	return (
		<div className="section fugu-section-padding2">
			<div className="container">
				<div className="fugu-section-title2">
					<div className="row">
						<div className="col-lg-6">
							<h2>Our goal is to make work easier and more efficient</h2>
						</div>
						<div className="col-lg-5 offset-lg-1 d-flex align-items-center">
							<p>
								Our goal is to provide our customers with the best service or product at the best
								possible market price without any kind of compromising quality. It is the core mission
								of our company.
							</p>
						</div>
					</div>
				</div>
				<div className="fugu-video-thumb fugu-video-thumb3 wow fadeInUpX" data-wow-delay=".10s">
					<img src="/images/all-img/about/video-thumb.png" alt="" />
					<div className="fugu-popup" onClick={() => setOpen(true)}>
						<img src="/images/all-img/video-btn.png" alt="" />
						<div className="fugu-play-btn">
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
