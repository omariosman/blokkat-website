import InnerSection from "../components/team-dark/innser-section";

export default function TeamDark() {
	return <InnerSection />;
}
export async function getStaticProps() {
	return { props: { header: "three", footer: "three" } };
}
