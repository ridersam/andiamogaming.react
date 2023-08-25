import { EMPLOYEES } from "../../app/shared/EMPLOYEES";
import { Col, Row } from "reactstrap";
import EmployeeCard from "./EmployeeCard";

const EmployeesList = () => {
    return (
        <Row className="ms-auto, text-center" >
            {EMPLOYEES.map((employee) => {
                return (
                    <Col md='3' className="m-4" key={employee.id}>
                        <EmployeeCard employee={employee} />
                    </Col>
                );
            })}
        </Row>
    )
}

export default EmployeesList;