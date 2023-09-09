import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody,CardHeader, CardFooter } from "reactstrap";

const BlogCard = ({ blog }) => {
    const {name, image, published, id, description, author } = blog;
    return (
        <Card>
            <CardImg
                width='100%'
                src={image}
                alt={name}
            />
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardText>{published}</CardText>
            </CardHeader>
            <CardBody>
                <CardText>{description}</CardText>
            </CardBody>
            <CardFooter>
                <h3>{author}</h3>
            </CardFooter>
        </Card>
    );
};

export default BlogCard;