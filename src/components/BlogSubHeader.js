import { Col, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

const BlogSubHeader = ({ current, detail }) => {

    return (
        <Row>
            <Col>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/'>Home</Link>
                        </BreadcrumbItem>
                        {detail && (
                            <BreadcrumbItem>
                                <Link to='/blog'>Blogs</Link>
                            </BreadcrumbItem>
                        )}
                        <BreadcrumbItem active> {current} </BreadcrumbItem>
                </Breadcrumb>
                <h2>{current}</h2>
                <hr />
            </Col>
        </Row>
    );
};

export default BlogSubHeader;