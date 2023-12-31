import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedGame } from '../games/gamesSlice';
import { selectFeaturedProduct } from '../products/productsSlice';
import { selectFeaturedBlog } from '../blogs/blogsSlice.js';
import { useSelector } from 'react-redux';

const DisplayList = () => {
    const items = useSelector((state) => [
        selectFeaturedGame(state), 
        selectFeaturedProduct(state)
    ]);

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