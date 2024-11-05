import React from "react";

export default function BlogPaginationLight() {
	return (
		<div className="row">
			<div className="col-12">
				<div className="fugo--pagination fugo--pagination2 wow fadeInUpX rt-mb-100" data-wow-delay="0.60s">
					<nav aria-label="Page navigation example">
						<ul className="pagination">
							<li className="page-item">
								<a className="page-link" href="#">
									<svg
										width="20"
										height="16"
										viewBox="0 0 20 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11.8333 1.58301L18.25 7.99967M18.25 7.99967L11.8333 14.4163M18.25 7.99967L1.75 7.99967"
											stroke="white"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
									<span>Prev</span>
								</a>
							</li>
							<li className="page-item active">
								<a className="page-link" href="#">
									1
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									2
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									3
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									<span>Next</span>
									<svg
										width="20"
										height="16"
										viewBox="0 0 20 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11.8333 1.58301L18.25 7.99967M18.25 7.99967L11.8333 14.4163M18.25 7.99967L1.75 7.99967"
											stroke="white"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
}
