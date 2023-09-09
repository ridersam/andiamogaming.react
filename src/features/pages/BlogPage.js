import { Container, Row, Col } from "reactstrap";
import BlogsList from "../blogs/BlogList";
import BlogSubHeader from "../../components/BlogSubHeader";

const BlogPage = () => {
    return (
        <Container>
            <BlogSubHeader current='Blogs' />
            <BlogsList />
        </Container>
    );
};

export default BlogPage;