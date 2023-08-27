import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody } from "reactstrap";

const ProductCard = ({product}) => {
    const {name, image, price} = product;
    return (
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
    );
};

export default ProductCard;