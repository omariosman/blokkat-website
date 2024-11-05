/* eslint-disable react/no-unescaped-entities */
export default function ErrorPage() {
	return (
		<div className="section">
			<div className="container">
				<div className="fugu-error-content wow fadeInUpX">
					<h1>404</h1>
					<h2>Oops, this page is not found</h2>
					<p>
						The page you're looking for can't be found. Double-check the URL and try again. we invite you to
						visit our homepage.
					</p>
					<a className="fugu-btn small-btn" href="">
						Go To Homepage
					</a>
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	return { props: { header: "six", footer: "one" } };
}
