/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { useState } from "react";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default function VideoSectionFive() {
	const [isOpen, setOpen] = useState(false);
	return (
		<div className="fugu--video-section2 fugu--section-padding">
			<div className="container">
				<div className="fugu--section-title">
					<div className="fugu--default-content content-sm">
						<h2>Check out a quick tutorial for the NFTs marketplace guide</h2>
					</div>
				</div>
				<div className="fugu--video-thumb wow fadeInUpX" data-wow-delay=".10s">
					<img src="/images/all-img/about2/video-thumb.png" alt="" />
					<div className="fugu--popup" onClick={() => setOpen(true)}>
						<img src="/images/all-img/about2/play-button.png" alt="" />
						<div className="waves wave-1"></div>
						<div className="waves wave-2"></div>
						<div className="waves wave-3"></div>
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
