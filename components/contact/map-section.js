import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default function MapSection({ location, zoomLevel }) {
	return (
		<div className="fugu-map">
			<div id="map">
				<GoogleMapReact defaultCenter={location} defaultZoom={zoomLevel}>
					<LocationPin text={location.address} />
				</GoogleMapReact>
			</div>
		</div>
	);
}
