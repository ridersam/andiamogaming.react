import { Col, Row } from "reactstrap";
import ProductCard from "./ProductCard";
import { selectAllTiers } from "./productsSlice";
import { useSelector } from "react-redux";

const ProductsList = () => {
    const products = useSelector(selectAllTiers);
    return (
        <Row className="ms-auto, text-center" >
            {products.map((product) => {
                return (
                    <Col 
                        md='3' 
                        className="m-5" 
                        key={product.id}
                    >
                        <ProductCard product={product}/>
                    </Col>
                );
            })}
        </Row>
    )
}

export default ProductsList;