import { Col, Row } from "reactstrap";
import EmployeeCard from "./EmployeeCard";
import { selectAllEmployees } from "./employeesSlice";

const EmployeesList = () => {
    const employees = selectAllEmployees();
    return (
        <Row className="ms-auto, text-center" >
            {employees.map((employee) => {
                return (
                    <Col
                    md='3'
                    className="m-4"
                    key={employee.id}
                    >
                        <EmployeeCard employee={employee} />
                    </Col>
                );
            })}
        </Row>
    )
}

export default EmployeesList;