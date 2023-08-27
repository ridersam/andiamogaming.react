import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";

const ProductDetail = ({product}) => {
    const {image, name, price, description } = product;

    return (
        <Col md='12' className="m-4" >
            <Card>
                <CardImg
                    top
                    src={image}
                    alt={name}
                />
                <CardBody>
                    <CardText>
                        <h2>{price}</h2>
                        {description}
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default ProductDetail;