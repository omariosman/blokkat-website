import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function FooterHomeOne() {
	return (
		<footer className="fugu-footer-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="fugu-textarea">
							<div className="fugu-footer-logo">
								<img src="/images/logo/logo-white.svg" alt="" className="light-version-logo" />
							</div>
							<p>
								Blokkat is an Arabic web3 community.
							</p>
							<p className="fugu-copywright">
								&copy; Copyright {new Date().getFullYear()}, All Rights Reserved to Blokkat
							</p>
						</div>
					</div>
					<div className="col-lg-2 col-md-4 col-sm-4">
						<div className="fugu-footer-menu">
							<span>Contact</span>
							<ul>
								<li>
									<Link href="mailto:name@email.com">blokkat.blockchain.ed@gmail.com </Link>
								</li>
							</ul>
						</div>
						<div className="fugu-social-icon">
							<ul>
								<li>
									<Link href={"https://www.youtube.com/@blokkat_xyz?si=KGhR1jYZ97i11A0F"} target="_blank">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
											<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
										</svg>
									</Link>
								</li>
								<li>
									<Link href="https://t.me/+-ihFLoa1zaZlYzc0" target="_blank">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
											<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
										</svg>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
