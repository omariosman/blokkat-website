import Head from "next/head";
import AboutSection from "../components/about/about-section";
import Breadcrumb from "../components/about/breadcrumb";
import TeamSection from "../components/about/team-section";
import CounterOneSection from "../components/common/counter/counter-one-section";
import FaqSection from "../components/common/faq/faq-section";
import FeatureOneSection from "../components/common/feature/feature-one-section";
import ClientSliderTwo from "./../components/common/sliders/client/client-slider-two";
import VideoSectionThree from "./../components/common/video/video-section-three";

export default function AboutUs() {
	return (
		<>
			<Head>
				<title>fugu - about us</title>
			</Head>
			<Breadcrumb />
			<AboutSection />
			<FeatureOneSection />
			<VideoSectionThree />
			<CounterOneSection />
			<TeamSection />
			<FaqSection />
			<ClientSliderTwo />
		</>
	);
}
