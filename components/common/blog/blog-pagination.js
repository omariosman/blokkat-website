import Link from "next/link";

export default function BlogPagination({ theme }) {
	let themeClassName = theme === "dark" ? "" : "fugo--pagination2";
	return (
		<div className={`fugo--pagination ${themeClassName}`}>
			<nav aria-label="Page navigation example">
				<ul className="pagination">
					<li className="page-item">
						<Link href={"/"} legacyBehavior>
							<a className="page-link">
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
								<span> Prev </span>
							</a>
						</Link>
					</li>
					<li className="page-item active">
						<Link href={"/"} legacyBehavior>
							<a className="page-link">1</a>
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
							<a className="page-link">
								<span> Next </span>
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
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
