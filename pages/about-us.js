import Head from "next/head";
import AboutSection from "../components/about/about-section";
import VisionSection from "../components/about/vision-section";
import Breadcrumb from "../components/about/breadcrumb";
import TeamSection from "../components/team/team-section";
import FeatureOneSection from "../components/common/feature/feature-one-section";
import FeatureSectionTwo from "../components/home-two/feature-section-two";
import FaqAccordionOne from "../components/common/faq/faq-accordion-one";
import ContactFormSection from "../components/contact/contact-form-section";
import dynamic from "next/dynamic";
const FilterGallaryFour = dynamic(() => import("./../components/common/filter-gallary/filter-gallary-four"), {
	ssr: false,
});
export default function AboutUs() {
	return (
		<>
			<Head>
				<title>Blokkat</title>
			</Head>
			<Breadcrumb />
			<AboutSection title="Our story" />
			<VisionSection title="Our vision" />
			<FeatureOneSection />
			<FeatureSectionTwo title="What we do?"/>
			<TeamSection />
			<FaqAccordionOne />
			<ContactFormSection />
		</>
	);
}
