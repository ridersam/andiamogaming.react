import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectProductById } from "../products/productsSlice";
import ProductDetail from "../products/ProductDetail";
import SubHeader from "../../components/SubHeader";

const ProductDetailPage = () => {
    const { productId } = useParams();
    const product = selectProductById(productId);

    return (
        <Container>
            <SubHeader current={product.name} detail={true} />
            <Row>
                <ProductDetail product={product} />
            </Row>
        </Container>
    )
};

export default ProductDetailPage;