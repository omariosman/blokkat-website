import InnerSection from "./../components/single-blog-dark/inner-section";

export default function SingleBlogDark() {
	return <InnerSection />;
}
export async function getStaticProps() {
	return { props: { header: "three", footer: "three" } };
}
