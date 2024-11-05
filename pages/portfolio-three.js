import BreadcrumbOne from "./../components/common/breadcrumb/breadcrumb-one";

import dynamic from "next/dynamic";
const FilterGallaryFour = dynamic(() => import("./../components/common/filter-gallary/filter-gallary-four"), {
	ssr: false,
});
export default function PortfolioThree() {
	return (
		<>
			<BreadcrumbOne title="Portfolio 03" />
			<FilterGallaryFour />
		</>
	);
}
