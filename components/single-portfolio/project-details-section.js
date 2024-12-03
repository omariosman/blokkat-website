// ProjectDetailsSection.js
export default function ProjectDetailsSection(props) {
	return (
	  <div className="fugu-gallery-data4">
		<ul>
		  {Object.entries(props).map(([key, value]) => (
			<li key={key}>
			  <span>{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
			  {key === 'Website' || (key === 'Event' && value != "NA") || (key === 'Recording' && value != "NA") ? (
				<a href={value} target="_blank" rel="noopener noreferrer">{value}</a>
			  ) : (
				value
			  )}
			</li>
		  ))}
		</ul>
	  </div>
	);
  }
  