import dynamic from "next/dynamic";
import BreadcrumbOne from "./../components/common/breadcrumb/breadcrumb-one";
const FilterGallaryTwo = dynamic(() => import("./../components/common/filter-gallary/filter-gallary-two"), {
	ssr: false,
});

export default function PortfolioOne() {
	return (
		<>
			<BreadcrumbOne title="Portfolio o1" />
			<FilterGallaryTwo />
		</>
	);
}
