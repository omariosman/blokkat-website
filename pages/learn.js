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
			<Breadcrumb title="Learning Hub" />
			<AboutSection 
				title="Learn Smart Contracts Development" 
				content="This section is designed to help you master the fundamentals of writing, deploying, and interacting with smart contracts using Solidity. Whether you're a beginner or looking to enhance your skills, our easy-to-follow YouTube playlist will guide you through every step of the journey. Start learning today and build the foundation for your blockchain career!"
				resourceLink="https://shorturl.at/4tXqz" 
			/>
			<AboutSection 
				title="Learn Smart Contracts Hacking and Web3 Security" 
				content="This section equips you with the knowledge to protect your smart contracts and Web3 applications. Learn to identify vulnerabilities, implement best practices, and safeguard decentralized systems. Our curated YouTube playlist makes advanced security concepts accessible to everyone"
				resourceLink="https://shorturl.at/G3Al6"
			/>		
		</>
	);
}
