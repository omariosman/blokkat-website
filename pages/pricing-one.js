import BreadcrumbOne from "../components/common/breadcrumb/breadcrumb-one";
import ClientSliderTwo from "../components/common/sliders/client/client-slider-two";
import FaqSection from "./../components/common/faq/faq-section";
import PricingSectionOne from "./../components/common/pricing/pricing-section-one";

export default function PricingOne() {
	return (
		<>
			<BreadcrumbOne title="Pricing o1" />
			<PricingSectionOne />
			<FaqSection />
			<ClientSliderTwo />
		</>
	);
}
