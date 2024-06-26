import {useState, useEffect, useCallback, useRef, useMemo} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import profilePhoto from '../assets/img/profile-photo.png';
import '../assets/css/ProfilePhoto.css';
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    const loopNumRef = useRef(0);

    const toRotate = useMemo(() => ['software developer', 'web developer', 'full-stack developer', 'passionate coder'], []);

    const tick = useCallback(() => {
        let i = loopNumRef.current % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            loopNumRef.current++;
            setDelta(500);
        }
    }, [isDeleting, text.length, toRotate, period]);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [delta, tick]);

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };


return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                        {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <span className="sub-title">Welcome to my Portfolio</span>
                            <h1>{`Hi I'm Adela,`}<br /><span className="wrap">{text || '\u00A0'}</span></h1>
                            <div className="black-container">
                                <p>I specialize in creating reliable and efficient applications,
                                    building attractive and responsive websites, integrating front-end and back-end technologies and continuously enhancing my skills and knowledge.
                                    Check out my work, and let's collaborate on your next project!</p>
                            </div>
                            <button onClick={scrollToContact}>Let's connect <ArrowRightCircle size={25}></ArrowRightCircle></button>
                        </div>
                        }
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img className="profilePhotoAnimation" src={profilePhoto} alt="Profile"/>
                </Col>
            </Row>
        </Container>
    </section>
)
}