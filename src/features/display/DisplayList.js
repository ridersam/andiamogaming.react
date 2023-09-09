import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedGame } from '../games/gamesSlice';
import { selectFeaturedProduct } from '../products/productsSlice';
import { selectFeaturedBlog } from '../blogs/blogsSlice.js';

const DisplayList = () => {
    const items = [selectFeaturedGame(), selectFeaturedProduct()];

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    item && (
                    <Col md='5' className='m-1' key={idx}>
                        <AnimatedDisplayCard item={item} />
                    </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplayList;