import Head from "next/head";
import FaqHomeOne from "../components/common/faq/faq-home-one";
import FeatureSectionTwo from "../components/common/feature/feature-section-two";
import ClientSliderOne from "../components/common/sliders/client/client-slider-one";
import TestimonialSliderOne from "../components/common/sliders/testimonial/testimonial-slider-one";
import ContentWithPhotoSection from "../components/home/content-with-photo-section";
import ContentWithPhotoSectionTwo from "../components/home/content-with-photo-section-two";
import CtaHomeOne from "../components/home/cta-home-one";
import HeroSection from "../components/home/hero-section";
import VideoSectionTwo from "./../components/common/video/video-section-two";

export default function Home() {
	return (
		<>
			<Head>
				<title>fugu - index -01</title>
			</Head>
			<HeroSection />
			<ClientSliderOne />
			<FeatureSectionTwo />
			<ContentWithPhotoSection />
			<VideoSectionTwo />
			<ContentWithPhotoSectionTwo />
			<TestimonialSliderOne />
			<FaqHomeOne />
			<CtaHomeOne />
		</>
	);
}

export async function getStaticProps() {
	return { props: { header: "one", footer: "one" } };
}
