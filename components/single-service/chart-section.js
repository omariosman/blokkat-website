/* eslint-disable @next/next/no-img-element */
export default function ChartSection() {
	return (
		<div className="section fugu-section-padding">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-lg-6">
						<div className="fugu-chart-thumb wow fadeInUpX" data-wow-delay=".10s">
							<img src="/images/all-img/service/chart.png" alt="" />
						</div>
					</div>
					<div className="col-xl-5 col-lg-6 col-md-10 offset-xl-1">
						<div className="fugu-default-content">
							<h2>We use certain policies to provide the Service</h2>
							<p>
								The private security services industry is ones of the largest in our country. There are
								around 6–6.5 million private security of personnel employed across the country in the
								future.
							</p>
							<div className="fugu-icon-list">
								<ul>
									<li>
										<img src="/images/svg/check1.svg" alt="" />
										Earn a 10-100% bonus on your weekly round-ups.
									</li>
									<li>
										<img src="/images/svg/check1.svg" alt="" />
										Save money when you shop at some of your spots.
									</li>
									<li>
										<img src="/images/svg/check1.svg" alt="" />
										Automatically invest part of every pay of crypto.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
