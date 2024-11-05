import dynamic from "next/dynamic";
import BreadcrumbOne from "./../components/common/breadcrumb/breadcrumb-one";
const FilterGallaryThree = dynamic(() => import("../components/common/filter-gallary/filter-gallary-three"), {
	ssr: false,
});

export default function PortfolioTwo() {
	return (
		<>
			<BreadcrumbOne title="Portfolio 02" />
			<FilterGallaryThree />
		</>
	);
}
