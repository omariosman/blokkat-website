import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function SingleBlogSidebarSection() {
	return (
		<div className="fugu-blog-sidebar">
			<div className="fugu-sidebar-item">
				<form action="#">
					<div className="fugu-product-search">
						<input type="search" placeholder="Type to search..." />
						<button id="fugu-search-btn">
							<img src="/images/svg/search.svg" alt="" />
						</button>
					</div>
				</form>
			</div>
			<div className="fugu-sidebar-item">
				<div className="fugu-sidebar-item-title">
					<h5>Blog Categories</h5>
				</div>
				<div className="fugu-categories">
					<ul>
						<li>
							<Link href={"#"}> Cryptocurrency (05) </Link>
						</li>
						<li>
							<Link href={"#"}> Web Development (18) </Link>
						</li>
						<li>
							<Link href={"#"}> Marketing (59) </Link>
						</li>
						<li>
							<Link href={"#"}> Data Analysis (03) </Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="fugu-sidebar-item">
				<div className="fugu-sidebar-item-title">
					<h5>Recent Posts</h5>
				</div>
				<div className="fugu-recent-post-item">
					<Link href={"#"}>
						<img src="/images/all-img/blog/recent-post1.png" alt="" />
					</Link>
					<div className="fugu-blog-meta">
						<ul>
							<li>
								<Link href={"#"}> Article </Link>
							</li>
							<li>
								<Link href={"#"}> August 26, 2022 </Link>
							</li>
						</ul>
					</div>
					<h6>
						<Link href={"#"}>
							Blockchain and government will they have live happily ever after trade crypto world?
						</Link>
					</h6>
				</div>
				<div className="fugu-recent-post-item">
					<Link href={"#"}>
						<img src="/images/all-img/blog/recent-post2.png" alt="" />
					</Link>
					<div className="fugu-blog-meta">
						<ul>
							<li>
								<Link href={"#"}> Article </Link>
							</li>
							<li>
								<Link href={"#"}> August 26, 2022 </Link>
							</li>
						</ul>
					</div>
					<h6>
						<Link href={"#"}>
							Blockchain receives the exclusive have quin hyperledger service provider certification
						</Link>
					</h6>
				</div>
				<div className="fugu-recent-post-item">
					<Link href={"#"}>
						<img src="/images/all-img/blog/recent-post3.png" alt="" />
					</Link>
					<div className="fugu-blog-meta">
						<ul>
							<li>
								<Link href={"#"}> Article </Link>
							</li>
							<li>
								<Link href={"#"}> August 26, 2022 </Link>
							</li>
						</ul>
					</div>
					<h6>
						<Link href={"#"}>
							Espeo is recognized by techreviewer as a top blockchain development company in 2021
						</Link>
					</h6>
				</div>
			</div>
			<div className="fugu-sidebar-item">
				<div className="fugu-sidebar-item-title">
					<h5>Tags</h5>
				</div>
				<div className="fugu-tags">
					<ul>
						<li>
							<Link href={"#"}> #Sponsored </Link>
						</li>
						<li>
							<Link href={"#"}> #Business </Link>
						</li>
						<li>
							<Link href={"#"}> #UI / UX Design </Link>
						</li>
						<li>
							<Link href={"#"}> #Marketing </Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
