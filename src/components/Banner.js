import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import profilePhoto from '../assets/img/profile-photo.png';
import '../assets/css/ProfilePhoto.css';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [' software developer', 'web developer', 'full-stack developer', 'passionate coder'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    const [index, setIndex] = useState(1);
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2);
        }

        if(!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            (setIndex(prevIndex => prevIndex - 1));
            setDelta(period);

        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setIndex(1);
            setDelta(500)
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
}
return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="sub-title">Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Adela`}<br /><span className="wrap">{text || '\u00A0'}</span></h1>
                    <p>I specialize in creating reliable and efficient applications,
                        building attractive and responsive websites, integrating front-end and back-end technologies and continuously enhancing my skills and knowledge.
                        Check out my work, and let's collaborate on your next project!</p>
                    <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}></ArrowRightCircle></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img className="profilePhotoAnimation" src={profilePhoto} alt="Profile photo"/>
                </Col>
            </Row>
        </Container>
    </section>
)
}