import { useRouter } from "next/router";
import BreadcrumbOne from "../../components/common/breadcrumb/breadcrumb-one";
import ProjectAboutSection from "../../components/single-portfolio/project-about-section";
import ProjectDetailsSection from "../../components/single-portfolio/project-details-section";
import ProjectThumbSection from "../../components/single-portfolio/project-thumb-section";
import AgendaTable from "../../components/common/tables/agenda-table";
import ImageCarousel from "../../components/common/carousel/image-carousel";
import  { eventsMap } from '../../utils/eventsData';

export default function EventPage({ eventData }) {
  const router = useRouter();
  const { eventId } = router.query;

  // Use the passed props
  const { title, image, about, city, country, date, event, agenda, venue, attendees, recording } = eventData;

  const carouselImages = [
    "/images/events/1.png",
    "/images/events/2.png",
    "/images/events/3.png",
  ];

  return (
    <>
      <BreadcrumbOne title="Event Details" />
      <div className="section fugu-section-padding3">
        <div className="container">
          <div className="fugu-gallery-wrap3">
            <div className="row">
              <div className="col-lg-12">
                <ProjectThumbSection image={image} />
              </div>
              <div className="col-lg-10">
                <h2>{title}</h2>
                <h3>Event Details</h3>
                <ProjectDetailsSection
                  City={city}
                  Country={country}
                  Venue={venue}
                  Date={date}
                />
                <ProjectDetailsSection
                  Attendees={attendees}
                  Event={event}
                  Recording={recording}
                />
                <ProjectAboutSection about={about} />
                </div>
                {/* Render the component here */}
                
                <ImageCarousel images={carouselImages} />
                
                <div className="col-lg-10">

                {/* Conditionally render the agenda section */}
                {agenda && (
                  <>
                    <h4 className="mt-4">Agenda</h4>
                    <AgendaTable agenda={agenda} />
                  </>
                )}
                { /* <ImageCarousel images={carouselImages} /> */ }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// getServerSideProps implementation
export async function getServerSideProps(context) {
  const { eventId } = context.params;

  console.log(`Requested Event ID: ${eventId}`);

  // Parse eventId to ensure it's a valid number
  const event = eventsMap[parseInt(eventId, 10)];

  if (!event) {
    // Handle invalid eventId gracefully
    return {
      notFound: true,
    };
  }

  return { props: { eventData: event } };
}
