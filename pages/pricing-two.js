import FaqSection from "../components/common/faq/faq-section";
import PricingSectionTwo from "../components/common/pricing/pricing-section-two";
import BreadcrumbOne from "./../components/common/breadcrumb/breadcrumb-one";
import ClientSliderTwo from "./../components/common/sliders/client/client-slider-two";
export default function PricingTwo() {
	return (
		<>
			<BreadcrumbOne title="Pricing 02" />
			<PricingSectionTwo />
			<FaqSection />
			<ClientSliderTwo />
		</>
	);
}
