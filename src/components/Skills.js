import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Col, Container, Row} from "react-bootstrap";
import backEndDev from "../assets/img/back-end-dev.png";
import frontEndDev from "../assets/img/front-end-dev.png";
import fullStackDev from "../assets/img/full-stack-dev.png";
import mobileAppDev from "../assets/img/mobile-app-dev.png";
import agile from "../assets/img/agile.png";
import foreignLanguages from "../assets/img/foreign-languages.png";
import colorSharp from '../assets/img/color-sharp.png';
export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <selection className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>I am continuously focused on enhancing my skills and knowledge. Check out some of the skills I bring to the carousel below:
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={fullStackDev} alt="Image" />
                                    <h5>Full-Stack Development</h5>
                                </div>
                                <div className="item">
                                    <img src={mobileAppDev} alt="Image" />
                                    <h5>Mobile App Development</h5>
                                </div>
                                <div className="item">
                                    <img src={agile} alt="Image" />
                                    <h5>Agile Project Management</h5>
                                </div>
                                <div className="item">
                                    <img src={frontEndDev} alt="Image" />
                                    <h5>Front-End Development</h5>
                                </div>
                                <div className="item">
                                    <img src={backEndDev} alt="Image" />
                                    <h5>Back-End Development</h5>
                                </div>
                                <div className="item">
                                    <img src={foreignLanguages} alt="Image" />
                                    <h5>Foreign Languages</h5>
                                </div>
                            </Carousel>
                            <img src={colorSharp} alt="Image" className="background-image-left" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </selection>
    )
}