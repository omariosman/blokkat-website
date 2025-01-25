import Head from "next/head";
import ClientSliderOne from "../components/common/sliders/client/client-slider-one";
import BootcampHeroSection from "../components/home-two/bootcamp-hero-section";
import FaqAccordionOne from "../components/common/faq/faq-accordion-one";
import FeatureOneSection from "../components/common/feature/feature-one-section";
import FeatureSectionTwo from "../components/home-two/feature-section-two";

export default function Bootcamp() {
	return (
		<>
			<Head>
				<title>Blokkat</title>
			</Head>
			<BootcampHeroSection />
			<FeatureOneSection title="Why Join?" />
			<FaqAccordionOne />
			<FeatureSectionTwo title="Bootcamp components"/>
			<FeatureSectionTwo title="What is in it for you?"/>
		</>
	);
}

export async function getStaticProps() {
	return { props: { header: "one", footer: "one" } };
}
