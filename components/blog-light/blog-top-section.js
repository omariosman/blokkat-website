import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function BlogTopSection() {
	return (
		<div className="fugu--blog-top-section">
			<div className="fugu--blog-top-wrap">
				<div className="fugu--blog-wrap">
					<div className="fugu--blog-thumb">
						<Link href={"single-blog-light"}>
							<img src="/images/all-img/blog2/dark/blog.png" alt="" />
						</Link>
						<div className="fugu--blog-badge">Art & Analysis</div>
					</div>
					<div className="fugu--blog-content">
						<div className="fugu--blog-date">
							<ul>
								<li>
									<Link href="#">
										<img src="/images/svg2/calendar2.svg" alt="" />
										July 18, 2022
									</Link>
								</li>
								<li>
									<Link href="#">
										<img src="/images/svg2/clock2.svg" alt="" />5 min read
									</Link>
								</li>
							</ul>
						</div>
						<div className="fugu--blog-title">
							<Link href={"single-blog-light"}>
								<h3>NFTs & Japanese Culture: a rising, diverse community</h3>
							</Link>
						</div>
						<p>
							It has now been 6 months since the NFT market saw indicators strongly shaken up, with
							additional over hype a month ago...
						</p>
						<div className="fugu--blog-user">
							<div className="fugu--blog-user-thumb">
								<img src="/images/all-img/blog2/author1.png" alt="" />
							</div>
							<div className="fugu--blog-user-data">
								<span>Dianne Russell</span>
								<p>Author</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
