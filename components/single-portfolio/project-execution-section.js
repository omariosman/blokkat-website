export default function ProjectExecutionSection({ agenda }) {
	const agendaItems = agenda.split("\n");
  
	return (
	  <div className="fugu-gallery-data4">
		<h4>Agenda:</h4>
		<ul>
		  {agendaItems.map((item, index) => (
			<li key={index}>{item}</li>
		  ))}
		</ul>
	  </div>
	);
  }
  