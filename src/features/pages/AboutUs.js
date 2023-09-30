import { Container } from "reactstrap";
import EmployeesList from "../employees/EmployeesList";
import AboutSubHeader from "../../components/AboutSubHeader";
import ContactInfo from "../contact/ContactInfo";

const AboutUs = () => {
    return (
        <Container>
            <AboutSubHeader current='About Us' />
            <hr style={{color: "aliceblue"}} />
                <h2>Our Staff</h2>
            <EmployeesList />
                <hr style={{color: "aliceblue"}} />
            <ContactInfo />
        </Container>
    );
};

export default AboutUs;