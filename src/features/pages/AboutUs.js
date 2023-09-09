import { Container } from "reactstrap";
import EMployeesList from "../employees/EMployeesList";
import AboutSubHeader from "../../components/AboutSubHeader";
import ContactInfo from "../contact/ContactInfo";

const AboutUs = () => {
    return (
        <Container>
            <AboutSubHeader current='About Us' />
            <EMployeesList />
            <ContactInfo />
        </Container>
    );
};

export default AboutUs;