import Head from "next/head";
import AboutSection from "../components/about/about-section";
import Breadcrumb from "../components/about/breadcrumb";
import TeamSection from "../components/about/team-section";
import CounterOneSection from "../components/common/counter/counter-one-section";
import FaqSection from "../components/common/faq/faq-section";
import FeatureOneSection from "../components/common/feature/feature-one-section";
import ClientSliderTwo from "./../components/common/sliders/client/client-slider-two";
import FeatureSectionTwo from "../components/home-two/feature-section-two";

export default function AboutUs() {
	return (
		<>
			<Head>
				<title>fugu - about us</title>
			</Head>
			<Breadcrumb />
			<AboutSection title="Our story" />
			<AboutSection title="Our vision" />
			<FeatureOneSection />
			<FeatureSectionTwo />
			<CounterOneSection />
			<TeamSection />
			<FaqSection />
			<ClientSliderTwo />
		</>
	);
}
