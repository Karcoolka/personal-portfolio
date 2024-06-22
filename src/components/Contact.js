import {useState} from "react";
import {Container, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Sent");
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(formDetails),
            });
        setButtonText("Sent");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({message: "Message Sent", success: true});
        } else {
            setStatus({message: "Something went wrong, please try again later.", success: false});
        }
    }

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="COntact Me"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" placeholder="First Name" value={formDetails.firstName} onChange={(e) => onFormUpdate('firstname', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" placeholder="Last Name" value={formDetails.firstName} onChange={(e) => onFormUpdate('lastname', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" placeholder="Email Address" value={formDetails.firstName} onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" placeholder="Phone No." value={formDetails.firstName} onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea row="6" placeholder="Message" value={formDetails.firstName} onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type="submit">
                                        <span>{buttonText}</span>
                                    </button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}