import { Container, Row, Col } from "reactstrap";
import ProductsList from "../products/ProductsList";
import SubHeader from "../../components/SubHeader";

const ProductPage = () => {
    return (
        <Container>
            <SubHeader current='Products' />
                <ProductsList />
        </Container>
    );
};

export default ProductPage;