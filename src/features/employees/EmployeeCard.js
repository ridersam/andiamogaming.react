import { Card, CardImg, CardImgOverlay,CardBody, CardText, CardTitle } from "reactstrap";

const EmployeeCard = ({employee}) => {
    const {image, name, Title} = employee;
    return (
        <Card>
            <CardImg
            width="100%"
            src={image}
            alt={name}
            />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
            <CardBody>
                <CardText>{Title}</CardText>
            </CardBody>
        </Card>
    );
};

export default EmployeeCard;