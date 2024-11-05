import JobPositionSection from "../components/career/job-position-section";
import SectionOne from "../components/career/section-one";
import BreadcrumbOne from "../components/common/breadcrumb/breadcrumb-one";
import CounterOneSection from "../components/common/counter/counter-one-section";
import FeatureOneSection from "../components/common/feature/feature-one-section";
import VideoSectionOne from "../components/common/video/video-section-one";

export default function Career() {
	return (
		<>
			<BreadcrumbOne title="Careers" />
			<SectionOne />
			<FeatureOneSection />
			<JobPositionSection />
			<CounterOneSection />
			<VideoSectionOne marginBottom />
		</>
	);
}
