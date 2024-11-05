import FaqAccordionFour from "../components/common/faq/faq-accordion-four";
import BreadcrumbSection from "../components/contact-light/breadcrumb-section";
import ContactFormSection from "../components/contact-light/contact-form-section";
import CommunicationSection from "./../components/contact-light/communication-section";

export default function ContactLight() {
	return (
		<div>
			<BreadcrumbSection />
			<ContactFormSection />
			<CommunicationSection />
			<FaqAccordionFour />
		</div>
	);
}

export async function getStaticProps() {
	return { props: { header: "four", footer: "four" } };
}
