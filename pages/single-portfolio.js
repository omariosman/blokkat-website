//import { useRouter } from "next/router";
import BreadcrumbOne from "../components/common/breadcrumb/breadcrumb-one";
import ProjectAboutSection from "../components/single-portfolio/project-about-section";
import ProjectDetailsSection from "../components/single-portfolio/project-details-section";
import ProjectExecutionSection from "../components/single-portfolio/project-execution-section";
import ProjectThumbSection from "../components/single-portfolio/project-thumb-section";



export default function SinglePortfolio({ 
  title,
  image,
  about,
  city,
  country,
  date,
  website,
  agenda 
}) {
  // const router = useRouter();
  // const {
  //   title,
  //   image,
  //   about,
  //   city,
  //   country,
  //   date,
  //   website,
  //   agenda
  // } = router.query;
console.log(title, image, about);
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
                <ProjectAboutSection about={about} />
                <ProjectDetailsSection
                  city={city}
                  country={country}
                  date={date}
                  website={website}
                />
                <ProjectExecutionSection agenda={agenda} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
