import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const EmployeeCard = (props) => {
    return (
        <Card>
            <CardImg
            width="100%"
            src={props.employee.image}
            alt={props.employee.name}
            />
            <CardImgOverlay>
                <CardTitle>{props.employee.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
};

export default EmployeeCard;