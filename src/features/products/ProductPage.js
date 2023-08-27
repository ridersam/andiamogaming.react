import { Container, Row, Col } from "reactstrap";
import ProductDetail from '../features/products/ProductDetail';
import ProductsList from "./ProductsList";
import { selectProductById } from "./productsSlice";
import { useState } from "react";

const ProductPage = () => {
    const [productId, setProductId] = useState(0);
    const selectedProduct = selectProductById(productId);

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                <ProductsList />
                </Col>
                <Col sm='7' md='5'>
                <ProductDetail product={selectedProduct} />
                </Col>
            </Row>
        </Container>
    )
};

export default ProductPage;