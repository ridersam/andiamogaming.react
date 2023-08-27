import { Col, Row } from "reactstrap";
import ProductCard from "./ProductCard";
import { selectAllTiers } from "./productsSlice";

const ProductsList = ({setProductId}) => {
    const products = selectAllTiers();

    return (
        <Row className="ms-auto, text-center" >
            {products.map((product) => {
                return (
                    <Col 
                        md='3' 
                        className="m-4" 
                        key={product.id}
                        onClick={() => setProductId(product.id)}
                    >
                        <ProductCard product={product}/>
                    </Col>
                );
            })}
        </Row>
    )
}

export default ProductsList;