import Head from "next/head";
import ClientSliderOne from "../components/common/sliders/client/client-slider-one";
import BootcampHeroSection from "../components/home-two/bootcamp-hero-section";
import FaqAccordionOneTemp from "../components/common/faq/faq-accordion-one-temp";
import FeatureOneSection from "../components/common/feature/feature-one-section";
import FeatureOneSectionTemp from "../components/common/feature/feature-one-section-temp";
import FeatureSectionTwoTemp from "../components/home-two/feature-section-two-temp";

export default function Bootcamp() {
	return (
		<>
			<Head>
				<title>Blokkat</title>
			</Head>
			<BootcampHeroSection />
			<FeatureOneSectionTemp title="Why Join?" />
			<FaqAccordionOneTemp />
			<FeatureSectionTwoTemp title="What is in it for you?"/>
		</>
	);
}

export async function getStaticProps() {
	return { props: { header: "one", footer: "one" } };
}
