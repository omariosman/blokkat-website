import BreadcrumbOne from "../components/common/breadcrumb/breadcrumb-one";
import ContactFormSection from "../components/contact/contact-form-section";
import CommunicateSection from "./../components/contact/communicate-section";
import MapSection from "./../components/contact/map-section";

export default function Contact() {
	const location = {
		address: "1600 Amphitheatre Parkway, Mountain View, california.",
		lat: 37.42216,
		lng: -122.08427,
	};

	return (
		<>
			<BreadcrumbOne title="Get in touch" />
			<ContactFormSection />
			<CommunicateSection />
			<MapSection location={location} zoomLevel={17} />
		</>
	);
}
