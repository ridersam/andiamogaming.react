import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { name, image, price, id } = product;
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg
                    width='100%'
                    src={image}
                    alt={name}
                />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
                <CardBody>
                    <CardText>{price}</CardText>
                </CardBody>
            </Card>
        </Link>
    );
};

export default ProductCard;