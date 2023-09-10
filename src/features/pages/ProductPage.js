import { Container, Row, Col } from "reactstrap";
import ProductsList from "../products/ProductsList";
import SubHeader from "../../components/SubHeader";
import SusbcriptionForm from "../../components/SusbscriptionForm";

const ProductPage = () => {
    return (
        <Container>
            <SubHeader current='Products' />
                <ProductsList />
                <SusbcriptionForm />
        </Container>
    );
};

export default ProductPage;