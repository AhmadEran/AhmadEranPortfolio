import React from "react";
// State
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
import { selectProjects, selectMainProjects } from "../app/projectsSlice";
import { useGetProjectsQuery } from "../app/apiSlice";
// Router
import { Link } from "react-router-dom";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Element } from "react-scroll";
import { Button, Col, Container, Row } from "react-bootstrap";
import Loading from "./Loading";
import Title from "./Title";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../config";
import FullscreenImage from "./FullscreenImage";

// #region component
const Projects = () => {
  const theme = useSelector(selectMode);
  const projects = useSelector(selectProjects);
  const mainProjects = useSelector(selectMainProjects);
  const { isLoading, isSuccess, isError, error } = useGetProjectsQuery();
  let content;

  if (isLoading) {
    content = (
      <Container className="d-flex">
        <Loading />
      </Container>
    );
  } else if (isSuccess) {
    content = (
      <>
        {!error && projectsData.length === 0 && (
          <h2 className="text-center">
            Oops, you do not have any GitHub projects yet...
          </h2>
        )}
        {projectsData.length !== 0 && (
          <>
              {projectsData.map((element) => {
                return (
                  <>
                  <br />
                  <br />
                  <br />
                    <h2 style={{ textAlign: "center" }} key={element.id}>
                    {element.name}
                  </h2>
                  <p style={{ textAlign: "center" }} key={element.id}>
                    {element.description}
                  </p>
                  <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">

                  {element.images.map((image) => (
                    <Col key={element.id}>
                    <FullscreenImage
                      key={image.id}
                      src={image.image}
                      alt='project'
                      // className="card-img-top"
                      />
                      </Col>
                  ))}

                      {/* <ProjectCard
                        images={element.images}
                        name={element.name}
                        description={element.description}
                        // url={element.html_url}
                        // demo={element.homepage}
                        /> */}
                  </Row>
                </>
                );
              })}
            {/* {projects.length > 3 && (
              <Container className="text-center mt-5">
                <Link to="/All-Projects">
                  <Button
                    size="lg"
                    variant={
                      theme === "light" ? "outline-dark" : "outline-light"
                    }
                  >
                    All <Icon icon="icomoon-free:github" /> Projects
                  </Button>
                </Link>
              </Container>
            )} */}
          </>
        )}
      </>
    );
  } else if (isError) {
    content = (
      <Container className="d-flex align-items-center justify-content-center">
        <h2>{`${error.status} - check getProjects query in src/app/apiSlice.js`}</h2>
      </Container>
    );
  }

  return (
    <Element name={"Projects"} id="projects">
      <section className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Projects"} />
          </Container>
          {content}
        </Container>
      </section>
    </Element>
  );
};
// #endregion

export default Projects;
