import {Container, Row, Col, Nav, Tab} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projFirm360 from "../assets/img/project-firm360.png";
export const Projects = () => {

    const projects_full_stack = [
        {
            title: "eRaZ",
            description: "Full-Stack Development",
            imgUrl: projImg1,
        },
        {
            title: "Firm360",
            description: "Angular 17, RxJs, Type Script, Java Spring, AWS, SCRUM",
            imgUrl: projFirm360,
            demoUrl: "https://www.google.com",
            sourceCodeUrl: "https://www.google.com"
        },
        {
            title: "MEAN app Maxmillian",
            description: "Full-Stack Development",
            imgUrl: projImg2,
        },
    ];

    const projects_front_end = [
        {
            title: "Recipes Roulette",
            description: "Front-End Development",
            imgUrl: projImg3,
        },
        {
            title: "Audio Plugin",
            description: "Front-End Development",
            imgUrl: projImg3,
        },
        {
            title: "Attendance-Tracker",
            description: "Backend Development",
            imgUrl: projImg2,
        },
    ];

    const projects_mobile_apps = [
        {
            title: "Angular Mobile App Maxmillian",
            description: "Mobile App Development",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                                    <h2>Projects</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Full-Stack</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Front-End/Back-End</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Mobile Apps</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {projects_full_stack.map((project, index) => (
                                                        <ProjectCard key={index} {...project} />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {projects_front_end.map((project, index) => (
                                                        <ProjectCard key={index} {...project} />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {projects_mobile_apps.map((project, index) => (
                                                        <ProjectCard key={index} {...project} />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}