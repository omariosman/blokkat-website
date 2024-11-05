/* eslint-disable @next/next/no-img-element */
export default function RoadmapSection() {
	return (
		<div className="fugu--roadmap-section fugu--roadmap-v2">
			<div className="container">
				<div className="fugu--section-title">
					<div className="fugu--default-content content-black">
						<h2>The Roadmap</h2>
						<p>
							A nft roadmap is a strategic planning tool used to set desired outcomes, milestones into the
							marketplace.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-3 col-md-6">
						<div className="fugu--iconbox-wrap wow fadeInUpX" data-wow-delay="0s">
							<div className="fugu--iconbox-thumb">
								<img src="/images/all-img/v4/icon1.png" alt="" />
							</div>
							<div className="fugu--iconbox-data">
								<h4>Phase 1</h4>
								<span>Artwork Launch</span>
								<p>A general introduction to your work, a body of work, or a specific project</p>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6">
						<div className="fugu--iconbox-wrap wow fadeInUpX" data-wow-delay="0.10s">
							<div className="fugu--iconbox-thumb">
								<img src="/images/all-img/v4/icon2.png" alt="" />
							</div>
							<div className="fugu--iconbox-data">
								<h4>Phase 2</h4>
								<span>Reveal metadata & rarity</span>
								<p>Sniping occurs when your metadata is pushed live and hosted on IPFS</p>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6">
						<div className="fugu--iconbox-wrap wow fadeInUpX" data-wow-delay="0.20s">
							<div className="fugu--iconbox-thumb">
								<img src="/images/all-img/v4/icon3.png" alt="" />
							</div>
							<div className="fugu--iconbox-data">
								<h4>Phase 3</h4>
								<span>Community Sharing</span>
								<p>Splitting up an NFT may increase to the value of the asset for the owner</p>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6">
						<div className="fugu--iconbox-wrap wow fadeInUpX" data-wow-delay="0.30s">
							<div className="fugu--iconbox-thumb">
								<img src="/images/all-img/v4/icon4.png" alt="" />
							</div>
							<div className="fugu--iconbox-data">
								<h4>Phase 4</h4>
								<span>Sell & Growth</span>
								<p>Since NFTs are blockchain-based , you need a wallet to create</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
