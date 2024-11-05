import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function BlogPagination() {
	return (
		<div className="fugu-pagination">
			<nav aria-label="Page navigation example">
				<ul className="pagination">
					<li className="page-item">
						<Link href={"/"} legacyBehavior>
							<a className="page-link" aria-label="Previous">
								<span aria-hidden="true">
									<img src="/images/svg/arrow-left-gray.svg" alt="" />
								</span>
							</a>
						</Link>
					</li>
					<li className="page-item">
						<Link href={"/"} legacyBehavior>
							<a className="page-link active">1</a>
						</Link>
					</li>
					<li className="page-item">
						<Link href={"/"} legacyBehavior>
							<a className="page-link">2</a>
						</Link>
					</li>
					<li className="page-item">
						<Link href={"/"} legacyBehavior>
							<a className="page-link">3</a>
						</Link>
					</li>
					<li className="page-item">
						<Link href={"/"} legacyBehavior>
							<a className="page-link" aria-label="Next">
								<span aria-hidden="true">
									<img src="/images/svg/arrow-right-gray.svg" alt="" />
								</span>
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
