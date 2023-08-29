import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";

const GameDetail = ({game}) => {
    const {image, name, released, description} = game;

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
                        <h2>{name}</h2>
                            {description}
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default GameDetail;