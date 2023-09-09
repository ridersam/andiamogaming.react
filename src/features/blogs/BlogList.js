import { Col, Row } from "reactstrap";
import BlogCard from "./BlogCard";
import { selectAllBlogs } from "./blogsSlice";

const BlogsList = () => {
    const blogs = selectAllBlogs();
    return (
        <Row className="ms-auto">
            {blogs.map((blog) => {
                return (
                    <Col
                    md='8'
                    className="m-4"
                    key={blog.id}
                    >
                        <BlogCard blog={blog} />
                    </Col>
                );
            })}
        </Row>
    )
};

export default BlogsList;