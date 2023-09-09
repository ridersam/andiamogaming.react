import { Container, Col, Row } from "reactstrap";
import ContactForm from "../../components/ContactForm";

const ContactInfo = () => {
    return (
        <Container>
            <Row className="row-content align-items-center">
                <h2>Contact Info</h2>
                <Col sm='4'>
                    <h5>Our Address</h5>
                    <address style={{color: 'aliceblue'}}>
                        4 Game Place
                        <br />
                        Los Angeles, CA
                        <br />
                        U.S.About
                    </address>
                </Col>
                <Col>
                    <a
                        role='button'
                        className='btn btn-link'
                        href='tel:+12065551234'
                    >
                        <i className='fa fa-phone' /> 1-206-555-1234
                    </a>
                    <br />
                    <a
                        role='button'
                        className='btn btn-link'
                        href='mailto:fakeemail@fakeemail.co'
                    >
                        <i className='fa fa-envelope-o' /> gaming@andiamo.com
                    </a>
                </Col>
            </Row>
            <Row className="row-content align-items-center">
                <Col xs='12'>
                    <h2>Send US Your Feedback</h2>
                    <hr/>
                </Col>
                <Col md='10'>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
};

export default ContactInfo;