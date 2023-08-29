import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
    const { name, image, released, id } = game;
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
                    <CardText>{released}</CardText>
                </CardBody>
            </Card>
        </Link>
    );
};

export default GameCard;