/* eslint-disable @next/next/no-img-element */

import dynamic from "next/dynamic";
import { useState } from "react";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default function VideoSectionSix() {
	const [isOpen, setOpen] = useState(false);
	return (
		<div className="section fugu-section-padding">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 offset-xl-1 col-lg-6 order-lg-2">
						<div className="fugu-video-thumb wow fadeInUpX" data-wow-delay=".10s">
							<img src="/images/all-img/service/video-bg.png" alt="" />
							<div className="fugu-popup" onClick={() => setOpen(true)}>
								<img src="/images/all-img/video-btn.png" alt="" />
								<div className="fugu-play-btn">
									<img src="/images/all-img/play-btn.png" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-5 col-lg-6 col-md-10 d-flex align-items-center">
						<div className="fugu-default-content">
							<h2>How do we provide our clients with industry a leading security?</h2>
							<p>
								There are three main types of security officers working for a private and public bus and
								individuals: government, in-house and those working contractually for the private
								security firms.
							</p>
							<p>
								Within those three main types, there are a even more options armed and unarmed,
								plainclothes or uniformed remote.
							</p>
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
