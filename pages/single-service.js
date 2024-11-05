import ClientSliderTwo from "../components/common/sliders/client/client-slider-two";
import BreadcrumbSection from "../components/single-service/breadcrumb-section";
import ChartSection from "../components/single-service/chart-section";
import FeatureSection from "../components/single-service/features-section";
import TeamSection from "../components/single-service/team-section";
import VideoSectionSix from "./../components/common/video/video-section-six";

export default function SingleService() {
	return (
		<>
			<BreadcrumbSection />
			<VideoSectionSix />
			<FeatureSection />
			<ChartSection />
			<TeamSection />
			<ClientSliderTwo />
		</>
	);
}
