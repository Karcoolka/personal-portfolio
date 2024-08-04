import {Container, Row, Col, Nav, Tab} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projFirm360 from "../assets/img/project-firm360.png";
import projEraz from "../assets/img/project-eraz.jpg";
import projPortfolio from "../assets/img/project-portfolio.png";
import projRecipeRoulette from "../assets/img/project-recipe-roulette.png";
import projAttendanceTracker from "../assets/img/project-attendance-tracker.png";
import projAcademyRepository from "../assets/img/project-academy-repo.png";
import projMEANApp from "../assets/img/project-mean.png";
import projIconic from "../assets/img/project-iconic.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {

    const projects_full_stack = [
        {
            id: 1,
            title: "eRaZ",
            description: "Vue.js, Azure, PHP 8.2, Nette, Docker, Node.js, Express.js, REST, SQL, Microsoft Teams",
            imgUrl: projEraz,
        },
        {
            id: 2,
            title: "Firm360",
            description: "Angular 17, RxJs, Type Script, Java Spring, REST, Postman, SQL, JWT, Thymeleaf, AWS, SCRUM, GitLab",
            imgUrl: projFirm360,
        },
        {
            id: 3,
            title: "MEAN app",
            description: "Angular 18 & NodeJS & Express & MongoDB, RxJs, REST, Angular Material, NPM, Nodemon, Multer, Bcrypt, JWT",
            imgUrl: projMEANApp,
            sourceCodeUrl: "https://github.com/Karcoolka/Messanger-MEAN-App"
        },
    ];

    const projects_front_end = [
        {
            id: 4,
            title: "Recipes Roulette",
            description: "Angular 17, RxJs, Type Script, Bootstrap, Node.js, Firebase",
            imgUrl: projRecipeRoulette,
            demoUrl: "https://euphonious-pegasus-ea7756.netlify.app/",
            sourceCodeUrl: "https://github.com/Karcoolka/Recipe-Roulette"
        },
        {
            id: 5,
            title: "Personal Portfolio",
            description: "React, React Bootstrap, RxJs, Type Script, Express.js, Node.js",
            imgUrl: projPortfolio,
            demoUrl: "https://euphonious-pegasus-ea7756.netlify.app/",
            sourceCodeUrl: "https://github.com/Karcoolka/personal-portfolio"
        },
        {
            id: 6,
            title: "Attendance-Tracker",
            description: "Java Spring, JPA, Hibernate, OAuth2, REST, Postman, JWT, Thymeleaf, MySQL, SCRUM, Jira",
            imgUrl: projAttendanceTracker,
            sourceCodeUrl: "https://github.com/Karcoolka/Attendance-Tracker"
        },
        // {
        //     id: 7,
        //     title: "Audio Plugin",
        //     description: "Front-End Development",
        //     imgUrl: projImg3,
        // },
        {
            id: 7,
            title: "Academy Repository",
            description: "JS/TS, Java, HTML, CSS, Node.js, Express.js, REST, GIT, MySQL",
            imgUrl: projAcademyRepository,
            sourceCodeUrl: "https://github.com/Karcoolka/Academy-Exercises-Reposiotry"
        },
    ];

    const projects_mobile_apps = [
        {
            id: 8,
            title: "iOS, Android & Web Apps with Ionic & Angular",
            description: "IN PROGRESS",
            imgUrl: projIconic,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                    <h2>Projects</h2>
                                    <p>Let's check my projects with their tech stack that I am experienced in:</p>
                                </div>}
                        </TrackVisibility>
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
                                        {projects_full_stack.map((project) => (
                                            <ProjectCard key={project.id} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {projects_front_end.map((project) => (
                                            <ProjectCard key={project.id} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {projects_mobile_apps.map((project) => (
                                            <ProjectCard key={project.id} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Background"></img>
        </section>
    )
}
