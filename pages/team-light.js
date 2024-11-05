import InnerSection from "../components/team-light/inner-section";

export default function TeamLight() {
	return <InnerSection />;
}
export async function getStaticProps() {
	return { props: { header: "four", footer: "four" } };
}
