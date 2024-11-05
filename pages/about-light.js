import ArtWorkSection from "../components/about-light/artwork-section";
import BreadCrumbSection from "../components/about-light/breadcrumb-section";
import CounterSection from "../components/about-light/counter-section";
import FaqSection from "../components/about-light/faq-section";
import FeatureSection from "../components/about-light/feature-section";
import TeamSection from "../components/about-light/team-section";
import VideoSection from "../components/about-light/video-section";

export default function AboutLight() {
	return (
		<>
			<BreadCrumbSection />
			<CounterSection />
			<VideoSection />
			<FeatureSection />
			<TeamSection />
			<ArtWorkSection />
			<FaqSection />
		</>
	);
}

export async function getStaticProps() {
	return { props: { header: "four", footer: "four" } };
}
