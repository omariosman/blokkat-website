/* eslint-disable @next/next/no-img-element */
export default function BreadcrumbsSection() {
	return (
		<div className="fugu--breadcrumbs-section">
			<div className="fugu--breadcrumbs-data center-content">
				<h1 className="wow fadeInUpX" data-wow-delay="0s">
					Blog & Resources
				</h1>
				<p className="wow fadeInUpX" data-wow-delay=".10s">
					Your source of market analysis, news, developments, and project reviews for the NFT ecosystem.
					Discover and keep up to date with the latest NFT news and events. Nexto is the best place to
					analyze, track and discover NFTs.
				</p>
				<div className="fugu--newsletter fugu--search wow fadeInUpX" data-wow-delay=".30s">
					<input type="email" placeholder="Search..." />
					<button type="submit" id="fugu--submit-btn">
						Search
					</button>
					<button id="fugu--search-btn">
						<img src="assets/images/svg2/search.svg" alt="" />
					</button>
				</div>
			</div>
		</div>
	);
}
