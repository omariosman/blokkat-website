// ProjectDetailsSection.js
export default function ProjectDetailsSection({ city, country, date, website }) {
	return (
	  <div className="fugu-gallery-data4">
		<h4>Event Details:</h4>
		<ul>
		  <li><span>Country:</span>{country}</li>
		  <li><span>City:</span>{city}</li>
		  <li><span>Date:</span>{date}</li>
		  <li><span>Website Link:</span><a href={website} target="_blank" rel="noopener noreferrer">{website}</a></li>
		</ul>
	  </div>
	);
  }
  