import InnerSection from "../components/contact-dark/inner-section";

export default function ContactDark() {
	return <InnerSection />;
}

export async function getStaticProps() {
	return { props: { header: "three", footer: "three" } };
}
