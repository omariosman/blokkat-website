import Head from "next/head";
import ClientSliderOne from "../components/common/sliders/client/client-slider-one";
import HeroSection from "../components/home-two/home-two-hero-section";
import FeatureSectionTwo from "../components/home-two/feature-section-two";
import FaqAccordionOne from "../components/common/faq/faq-accordion-one";

export default function Home() {
	return (
		<>
			<Head>
				<title>Blokkat</title>
			</Head>
			<HeroSection />
			<ClientSliderOne />
			<FeatureSectionTwo />
			<FaqAccordionOne />
		</>
	);
}

export async function getStaticProps() {
	return { props: { header: "one", footer: "one" } };
}
