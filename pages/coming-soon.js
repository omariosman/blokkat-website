import CountdownSection from "../components/coming-soon/countdown-section";
import LogoSection from "../components/coming-soon/logo-section";
import NewsletterSection from "../components/coming-soon/newsletter-section";

export default function ComingSoon() {
	return (
		<div className="coming-soon-section">
			<div className="container">
				<div className="coming-soon-column">
					<div className="coming-soon-logo">
						<LogoSection />
					</div>
					<div className="coming-soon-content">
						<h2>We are coming soon...</h2>
						<p>
							We are bringing you something amazing. Enter your email to receive a notification email when
							we launch it.
						</p>
					</div>
					<div className="fugu-countdown-wrap">
						<CountdownSection />
					</div>
					<form action="#">
						<NewsletterSection />
					</form>
				</div>
			</div>
		</div>
	);
}
