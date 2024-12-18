import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function TeamSection() {
	return (
		<div className="section fugu-section-padding3">
			<div className="container">
				<div className="fugu-section-title">
					<h2>Meet The Team</h2>
				</div>
				<div className="row">
					<div className="col-xxl-3 col-lg-4 col-md-6">
						<div className="fugu-team-wrap wow fadeInUpX" data-wow-delay="0s">
							<div className="fugu-team-thumb">
								<img src="/images/team/kareem-wave.jpg" alt="" />
								<div className="fugu-team-data">
									<h5>
										<Link href={"single-team"}> Kareem Kassab </Link>
									</h5>
									<div className="fugu-team-data-wrap">
										<p><b>Founder</b></p>
										<div className="fugu-social-icon2">
											<ul>
												<li>
													<Link href={"https://www.linkedin.com/in/kareem-kassab/"} target="_blank">
														<svg
														width="13"
														height="11"
														viewBox="0 0 24 24"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
														>
														<path
															d="M4.98 3.5C4.98 4.32843 4.30843 5 3.48 5C2.65157 5 1.98 4.32843 1.98 3.5C1.98 2.67157 2.65157 2 3.48 2C4.30843 2 4.98 2.67157 4.98 3.5ZM1.98 21H5.98V8H1.98V21ZM8.98 8H12.7V9.8475H12.7625C13.3125 8.975 14.4785 8 16.2085 8C20.0575 8 20.98 10.21 20.98 13.9825V21H16.98V14.48C16.98 12.95 16.585 11.98 15.378 11.98C14.255 11.98 13.6785 12.7875 13.45 13.415C13.37 13.625 13.34 13.94 13.34 14.255V21H8.98V8Z"
															fill="white"
														/>
														</svg>
													</Link>
												</li>
												<li>
													<Link href={"https://x.com/IceKareem7"} target="_blank">
														<svg
															width="13"
															height="11"
															viewBox="0 0 13 11"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M12.6518 1.76691C12.2028 1.96645 11.7289 2.09116 11.2301 2.16598C11.7289 1.86668 12.128 1.39279 12.3026 0.819124C11.8287 1.09348 11.3049 1.29302 10.7312 1.41773C10.2823 0.943833 9.63379 0.644531 8.93542 0.644531C7.58857 0.644531 6.49113 1.74197 6.49113 3.08883C6.49113 3.28836 6.51607 3.46295 6.56595 3.63755C4.54567 3.53778 2.72492 2.56505 1.50277 1.06854C1.30323 1.44267 1.17852 1.84174 1.17852 2.29069C1.17852 3.13871 1.60253 3.88697 2.27596 4.33592C1.87689 4.31098 1.50277 4.21121 1.15358 4.03662V4.06156C1.15358 5.25876 2.0016 6.25644 3.12398 6.48091C2.92445 6.5308 2.69997 6.55574 2.4755 6.55574C2.32585 6.55574 2.15125 6.5308 2.0016 6.50585C2.32585 7.47859 3.22375 8.2019 4.29625 8.2019C3.44823 8.85038 2.40067 9.24945 1.25335 9.24945C1.05381 9.24945 0.85428 9.24945 0.679688 9.22451C1.77713 9.92288 3.04916 10.322 4.4459 10.322C8.96037 10.322 11.4296 6.58068 11.4296 3.33825C11.4296 3.23848 11.4296 3.11377 11.4296 3.014C11.9035 2.68976 12.3275 2.26575 12.6518 1.76691Z"
																fill="white"
															/>
														</svg>
													</Link>
												</li>
												<li>
													<Link href={"https://github.com/kareemikassab7"} target="_blank">
														<svg
															width="15"
															height="15"
															viewBox="0 0 15 15"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																fillRule="evenodd"
																clipRule="evenodd"
																d="M7.65173 0.742188C3.80429 0.742188 0.708984 3.83749 0.708984 7.68493C0.708984 10.7513 2.70502 13.3548 5.45319 14.2805C5.80033 14.3384 5.91604 14.1359 5.91604 13.9334C5.91604 13.7598 5.91604 13.3259 5.91604 12.7474C3.97786 13.1813 3.57287 11.8217 3.57287 11.8217C3.25466 11.0117 2.79181 10.8092 2.79181 10.8092C2.15539 10.3752 2.84966 10.3752 2.84966 10.3752C3.54394 10.4331 3.92 11.0985 3.92 11.0985C4.52749 12.1688 5.53998 11.8506 5.94497 11.677C6.00283 11.2142 6.1764 10.9249 6.37889 10.7513C4.8457 10.5777 3.22573 9.97025 3.22573 7.30887C3.22573 6.55674 3.48608 5.92032 3.94893 5.45747C3.89108 5.2839 3.63072 4.58963 4.00679 3.60607C4.00679 3.60607 4.58535 3.4325 5.91604 4.32927C6.46568 4.18463 7.07317 4.09785 7.65173 4.09785C8.23029 4.09785 8.83778 4.18463 9.38742 4.32927C10.7181 3.4325 11.2967 3.60607 11.2967 3.60607C11.6727 4.5607 11.4413 5.25497 11.3545 5.45747C11.7884 5.94925 12.0777 6.55674 12.0777 7.30887C12.0777 9.97025 10.4578 10.5488 8.89564 10.7224C9.15599 10.9249 9.35849 11.3588 9.35849 11.9952C9.35849 12.9209 9.35849 13.6731 9.35849 13.9045C9.35849 14.078 9.4742 14.3095 9.85027 14.2516C12.5984 13.3548 14.5945 10.7513 14.5945 7.68493C14.5945 3.83749 11.4992 0.742188 7.65173 0.742188Z"
																fill="white"
															/>
														</svg>
													</Link>
												</li>
												<li>
													<Link href="https://t.me/kareemikassab" target="_blank" className="blokkat-social-icon">
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
															<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
														</svg>
													</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xxl-3 col-lg-4 col-md-6">
						<div className="fugu-team-wrap wow fadeInUpX" data-wow-delay=".10s">
							<div className="fugu-team-thumb">
								<img src="/images/team/omar-web3.jpg" alt="" />
								<div className="fugu-team-data">
									<h5>
										<Link href={"single-team"}> Omar Osman </Link>
									</h5>
									<div className="fugu-team-data-wrap">
										<p><b>Technical Instructor</b></p>
										<div className="fugu-social-icon2">
											<ul>
												<li>
													<Link href={"https://linkedin.com/in/omariosman"} target="_blank">
														<svg
														width="13"
														height="11"
														viewBox="0 0 24 24"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
														>
														<path
															d="M4.98 3.5C4.98 4.32843 4.30843 5 3.48 5C2.65157 5 1.98 4.32843 1.98 3.5C1.98 2.67157 2.65157 2 3.48 2C4.30843 2 4.98 2.67157 4.98 3.5ZM1.98 21H5.98V8H1.98V21ZM8.98 8H12.7V9.8475H12.7625C13.3125 8.975 14.4785 8 16.2085 8C20.0575 8 20.98 10.21 20.98 13.9825V21H16.98V14.48C16.98 12.95 16.585 11.98 15.378 11.98C14.255 11.98 13.6785 12.7875 13.45 13.415C13.37 13.625 13.34 13.94 13.34 14.255V21H8.98V8Z"
															fill="white"
														/>
														</svg>
													</Link>
												</li>
												<li>
													<Link href={"https://x.com/omarMosman23"} target="_blank">
														<svg
															width="13"
															height="11"
															viewBox="0 0 13 11"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M12.6518 1.76691C12.2028 1.96645 11.7289 2.09116 11.2301 2.16598C11.7289 1.86668 12.128 1.39279 12.3026 0.819124C11.8287 1.09348 11.3049 1.29302 10.7312 1.41773C10.2823 0.943833 9.63379 0.644531 8.93542 0.644531C7.58857 0.644531 6.49113 1.74197 6.49113 3.08883C6.49113 3.28836 6.51607 3.46295 6.56595 3.63755C4.54567 3.53778 2.72492 2.56505 1.50277 1.06854C1.30323 1.44267 1.17852 1.84174 1.17852 2.29069C1.17852 3.13871 1.60253 3.88697 2.27596 4.33592C1.87689 4.31098 1.50277 4.21121 1.15358 4.03662V4.06156C1.15358 5.25876 2.0016 6.25644 3.12398 6.48091C2.92445 6.5308 2.69997 6.55574 2.4755 6.55574C2.32585 6.55574 2.15125 6.5308 2.0016 6.50585C2.32585 7.47859 3.22375 8.2019 4.29625 8.2019C3.44823 8.85038 2.40067 9.24945 1.25335 9.24945C1.05381 9.24945 0.85428 9.24945 0.679688 9.22451C1.77713 9.92288 3.04916 10.322 4.4459 10.322C8.96037 10.322 11.4296 6.58068 11.4296 3.33825C11.4296 3.23848 11.4296 3.11377 11.4296 3.014C11.9035 2.68976 12.3275 2.26575 12.6518 1.76691Z"
																fill="white"
															/>
														</svg>
													</Link>
												</li>
												<li>
												</li>
												<li>
													<Link href={"https://github.com/omariosman"} target="_blank">
														<svg
															width="15"
															height="15"
															viewBox="0 0 15 15"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																fillRule="evenodd"
																clipRule="evenodd"
																d="M7.65173 0.742188C3.80429 0.742188 0.708984 3.83749 0.708984 7.68493C0.708984 10.7513 2.70502 13.3548 5.45319 14.2805C5.80033 14.3384 5.91604 14.1359 5.91604 13.9334C5.91604 13.7598 5.91604 13.3259 5.91604 12.7474C3.97786 13.1813 3.57287 11.8217 3.57287 11.8217C3.25466 11.0117 2.79181 10.8092 2.79181 10.8092C2.15539 10.3752 2.84966 10.3752 2.84966 10.3752C3.54394 10.4331 3.92 11.0985 3.92 11.0985C4.52749 12.1688 5.53998 11.8506 5.94497 11.677C6.00283 11.2142 6.1764 10.9249 6.37889 10.7513C4.8457 10.5777 3.22573 9.97025 3.22573 7.30887C3.22573 6.55674 3.48608 5.92032 3.94893 5.45747C3.89108 5.2839 3.63072 4.58963 4.00679 3.60607C4.00679 3.60607 4.58535 3.4325 5.91604 4.32927C6.46568 4.18463 7.07317 4.09785 7.65173 4.09785C8.23029 4.09785 8.83778 4.18463 9.38742 4.32927C10.7181 3.4325 11.2967 3.60607 11.2967 3.60607C11.6727 4.5607 11.4413 5.25497 11.3545 5.45747C11.7884 5.94925 12.0777 6.55674 12.0777 7.30887C12.0777 9.97025 10.4578 10.5488 8.89564 10.7224C9.15599 10.9249 9.35849 11.3588 9.35849 11.9952C9.35849 12.9209 9.35849 13.6731 9.35849 13.9045C9.35849 14.078 9.4742 14.3095 9.85027 14.2516C12.5984 13.3548 14.5945 10.7513 14.5945 7.68493C14.5945 3.83749 11.4992 0.742188 7.65173 0.742188Z"
																fill="white"
															/>
														</svg>
													</Link>
												</li>
												<li>
													<Link href="https://t.me/omarosman23" target="_blank" className="blokkat-social-icon">
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
															<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
														</svg>
													</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xxl-3 col-lg-4 col-md-6">
						<div className="fugu-team-wrap wow fadeInUpX wrap2" data-wow-delay=".70s">
							<h4>Are you interested in working with us?</h4>
							<Link href="/contact" className="fugu-btn small-btn">Join us</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
