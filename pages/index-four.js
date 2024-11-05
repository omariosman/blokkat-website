import Head from "next/head";
import FaqAccordionOne from "../components/common/faq/faq-accordion-one";
import NftCollectionSection from "../components/common/sliders/card/card-slider-two";
import TeamHomeFour from "../components/common/team/team-home-four";
import AboutSection from "../components/home-four/about-section";
import ArtWorkSection from "../components/home-four/art-work-section";
import HeroSection from "../components/home-four/hero-section";
import RoadmapSection from "../components/home-four/roadmap-section";
import TextSliderThree from "./../components/common/sliders/text/text-slider-three";

export default function IndexFour() {
	return (
		<>
			<Head>
				<title>fugu - index o4</title>
			</Head>
			<HeroSection />
			<TextSliderThree />
			<AboutSection />
			<ArtWorkSection />
			<NftCollectionSection />
			<RoadmapSection />
			<TeamHomeFour />
			<FaqAccordionOne />
		</>
	);
}

export async function getStaticProps() {
	return { props: { header: "four", footer: "four" } };
}
